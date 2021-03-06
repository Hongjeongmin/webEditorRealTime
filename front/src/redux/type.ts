export type RootState = {
    loading: boolean;
    login: {
        modal: boolean;
        user: {
            id: string;
            nickname: string;
            userImage: string;
            type: string;
        }
    };
    my: {
        layer: boolean;
    }

};

export type UserType = {
    id: string;
    nickname: string;
    userImage: string;
    type: string;
};