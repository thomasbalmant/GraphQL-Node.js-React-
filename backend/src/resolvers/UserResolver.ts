import { User } from './../models/User';
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import crypto from 'crypto'
//CONTINUIDADE AQUI
@Resolver()
export class UserResolver {
    private data: User[] = []
    
    @Query(() => [User])
    async users() {
        return this.data
    }
    //Ver Lib
    @Mutation(() => User)
    async createUser(
        @Arg('name') name: string
    ){
        const user = {id: crypto.randomUUID(), name}

        this.data.push(user)

        return user
    }
}
