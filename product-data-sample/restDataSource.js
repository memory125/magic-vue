import Axios from "axios";

const baseUrl = "http://localhost:3500/products/";

export class RestDataSource {
    async getProducts() {
        return (await Axios.get(baseUrl)).data;
    }
}