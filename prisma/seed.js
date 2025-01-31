const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    // Limpar dados existentes
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.product.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.category.deleteMany();
    await prisma.supplier.deleteMany();
    await prisma.user.deleteMany();

    // Criar usuários
    const [admin, user] = await Promise.all([
        prisma.user.create({
            data: {
                name: "Admin",
                email: "admin@example.com",
                password: "senhaSegura123",
                role: "Admin",
            },
        }),
        prisma.user.create({
            data: {
                name: "Usuário Comum",
                email: "user@example.com",
                password: "outraSenha456",
                role: "User",
            },
        }),
    ]);

    // Criar fornecedores
    const [supplierPF, supplierPJ] = await Promise.all([
        prisma.supplier.create({
            data: {
                name: "Fornecedor Pessoa Física",
                document: "123.456.789-09",
                documentType: "CPF",
                email: "pf@supplier.com",
                status: "Active",
            },
        }),
        prisma.supplier.create({
            data: {
                name: "Fornecedor Empresa Ltda",
                document: "12.345.678/0001-99",
                documentType: "CNPJ",
                email: "pj@supplier.com",
                status: "Active",
            },
        }),
    ]);

    // Criar categorias
    const [eletronicos, vestuario, alimentos] = await Promise.all([
        prisma.category.create({
            data: {
                name: "Eletrônicos",
                color: "#FF0000",
            },
        }),
        prisma.category.create({
            data: {
                name: "Vestuário",
                color: "#00FF00",
            },
        }),
        prisma.category.create({
            data: {
                name: "Alimentos",
                color: "#0000FF",
            },
        }),
    ]);

    // Criar produtos
    const [produto1, produto2, produto3] = await Promise.all([
        prisma.product.create({
            data: {
                name: "Smartphone Premium",
                description: "Último modelo com 5G",
                categoryId: eletronicos.id,
                supplierId: supplierPF.id,
                stock: 50,
                costPrice: 1500.0,
                salePrice: 2500.0,
                barcode: "7891234567890",
            },
        }),
        prisma.product.create({
            data: {
                name: "Camisa Polo",
                description: "Tamanhos P a GG",
                categoryId: vestuario.id,
                supplierId: supplierPJ.id,
                stock: 100,
                costPrice: 45.0,
                salePrice: 99.9,
                barcode: "9876543210987",
            },
        }),
        prisma.product.create({
            data: {
                name: "Arroz Integral",
                description: "Pacote 5kg",
                categoryId: alimentos.id,
                supplierId: supplierPJ.id,
                stock: 200,
                costPrice: 15.0,
                salePrice: 22.5,
                barcode: "6543219876543",
            },
        }),
    ]);

    // Criar clientes
    const [clientePF, clientePJ] = await Promise.all([
        prisma.customer.create({
            data: {
                name: "Cliente Pessoa Física",
                email: "cliente.pf@example.com",
                document: "987.654.321-00",
                documentType: "CPF",
            },
        }),
        prisma.customer.create({
            data: {
                name: "Cliente Empresa SA",
                email: "cliente.pj@example.com",
                document: "98.765.432/0001-11",
                documentType: "CNPJ",
            },
        }),
    ]);

    // Criar pedidos com itens
    await prisma.order.create({
        data: {
            custumerId: clientePF.id,
            totalValue: 2500.0 * 2 + 99.9 * 3,
            paymentMethod: "Card",
            status: "Completed",
            OrderItems: {
                create: [
                    {
                        productId: produto1.id,
                        amount: 2,
                        salePrice: 2500.0,
                        totalPrice: 5000.0,
                    },
                    {
                        productId: produto2.id,
                        amount: 3,
                        salePrice: 99.9,
                        totalPrice: 299.7,
                    },
                ],
            },
        },
    });

    await prisma.order.create({
        data: {
            custumerId: clientePJ.id,
            totalValue: 22.5 * 10,
            paymentMethod: "Pix",
            status: "Processing",
            deliveryDate: new Date("2024-06-15"),
            OrderItems: {
                create: [
                    {
                        productId: produto3.id,
                        amount: 10,
                        salePrice: 22.5,
                        totalPrice: 225.0,
                    },
                ],
            },
        },
    });

    console.log("Seed concluído com sucesso!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
