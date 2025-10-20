"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.get("/users", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield client.user.findMany();
        res.json({
            userData
        });
    });
});
app.get("/todos/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const userData = yield client.user.findFirst({
            where: {
                id: parseInt(id)
            },
            select: {
                todos: true
            }
        });
        res.json({
            userData
        });
    });
});
app.listen(3000);
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.create({
            data: {
                username: "jaya",
                password: "123456789",
                age: 26,
                city: "Hyd"
            }
        });
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.delete({
            where: {
                id: 1
            }
        });
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.user.update({
            where: {
                id: 1
            },
            data: {
                city: "Hyderabad"
            }
        });
    });
}
function getUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const userData = yield client.user.findFirst({
            where: {
                id: 1
            },
            // select:{
            //     username : true
            // },
            include: {
                todos: true
            }
        });
        console.log(userData);
    });
}
// getUser();
