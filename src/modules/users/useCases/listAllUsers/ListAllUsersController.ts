import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.headers["user_id"].toString();
    console.log(user_id)

    const users = this.listAllUsersUseCase.execute({user_id})

    if(Error.prototype.message){
      return response.status(400).json({message: Error.prototype.message})
    }

    return response.status(201).json(users)
  }
}

export { ListAllUsersController };
