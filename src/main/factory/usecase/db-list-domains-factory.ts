import { DbListDomains } from "../../../data/usecase/db-list-domains"

export const makeDbListDomains = () => {
    return new DbListDomains();
}