import { TypeUser } from "./user";

export type TypeModal = {
    active: boolean;
    user: TypeUser | false;
}