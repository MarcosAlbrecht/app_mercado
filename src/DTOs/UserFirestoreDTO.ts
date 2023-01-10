import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type UserFirestoreDTO = {
    email: string;
    cep: string;
    city: string;
    district: string;
    street: string;
    number: string;
    user_type: string;
    active: boolean;
    auth_id: string;
    created_at: FirebaseFirestoreTypes.Timestamp;
    updatet_at?:FirebaseFirestoreTypes.Timestamp;
}