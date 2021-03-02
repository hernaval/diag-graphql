import { UserOrderByInput } from "../../../inputs/UserOrderByInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class FindFirstUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "email" | "emailConfirmed" | "passwordHash" | "username" | "firstName" | "lastName" | "gender" | "function" | "organisation" | "category" | "companySize" | "activity" | "country" | "phone" | "status" | "role" | "forgotToken" | "createdDate" | "updatedDate"> | undefined;
}
