export interface IUser {
    id: number;
    email: string;
    password?: string;
    fromSocial: boolean;
}

export interface IPublicUser extends Omit<IUser, 'password'> {}
export interface IUserToCreate extends Omit<IUser, 'id'> {}
