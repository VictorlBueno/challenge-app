import {IamService} from "@/domain/external/iam.service";
import axios, {AxiosInstance} from "axios";
import {ClientEntity} from "@/domain/entities/client.entity";

export class CognitoService implements IamService {
    private readonly api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL:  "https://l1gzzbdzhg.execute-api.us-east-1.amazonaws.com/v1",
        });
    }

    async createUser(client: ClientEntity): Promise<ClientEntity> {
        const response = await this.api.post("/clients", client);
        return response.data;
    }

    async getUserDetailsByCpf(cpf: string): Promise<ClientEntity> {
        const response = await this.api.post(`/clients/${cpf}`);
        return response.data;
    }
}