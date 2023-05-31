import {Request, Response} from "express";
import User from "../database/schemas/User";

class UserController{

  async create(request: Request, response: Response){
    const { name, email, password } = request.body
    try{
      const userExists = await User.findOne({ email });


      if(userExists) {
        return response.status(400).send({
          error: "Ooops",
          message: "User already exists"
        })
      }
      
      const user = await User.create({
        name,
        email,
        password
      });

      return response.json(user);

    }catch(error){
      return response.status(500).send({
        error: "Registration Failed",
        message: error
      })
    }
  }

  async find(request: Request, response: Response){
    try {
      const users = await User.find();
      return response.json(users);
    } catch (error) {
      return response.status(500).json({
        error: "Something wrong happened, try again",
        message: error
      })
    }
  }
  async GetUserById(request: Request, response: Response){
    try {
      const { id } = request.body
      const user = await User.findById(id);

      if(!user) {
        return response.status(400).send({
          error: "Ooops",
          message: "User not found"
        })
      }
      return response.json(user);
    } catch (error) {
      return response.status(500).json({
        error: "Something wrong happened, try again",
        message: error
      })
    }
  }

  async deleteUser(request: Request, response: Response){
    try {
      const { id } = request.body
      const user = await User.findById(id);

      if(!user) {
        return response.status(400).send({
          error: "Ooops",
          message: "User not found"
        })
      }
      user.deleteOne();
      return response.send({
        message: "User deleted"
      });
    } catch (error) {
      return response.status(500).json({
        error: "Something wrong happened, try again",
        message: error
      })
    }
  }

  async alterUser(request: Request, response: Response){
    try {
      const { id } = request.body
      const user = await User.findById(id);

      if(!user) {
        return response.status(400).send({
          error: "Ooops",
          message: "User not found"
        })
      }
      //user();
      return response.send({
        message: "User deleted"
      });
    } catch (error) {
      return response.status(500).json({
        error: "Something wrong happened, try again",
        message: error
      })
    }
  }
}

export default new UserController;