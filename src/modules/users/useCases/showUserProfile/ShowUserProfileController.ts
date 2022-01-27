import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params;

    const userProfile = this.showUserProfileUseCase.execute({user_id})

    if(!userProfile){
      return response.status(400).json({error: Error.prototype.message})
    }

    return response.status(201).json(userProfile);
  }
}

export { ShowUserProfileController };
