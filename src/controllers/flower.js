import { v4 as uuidv4 } from "uuid";
import FlowerModel from "../models/flower.js";

const POST_CREATE_FLOWER = async (req, res) => {
  try {
    const flower = new FlowerModel({
      id: uuidv4(),
      ...req.body,
    });
    const response = await flower.save();
    res.status(201).json({ status: "item was pushed", response: response });
  } catch (err) {
    console.log("HANDLED ERROR:", err);
    return res.status(500).json({ message: "Error happened" });
  }
};

const GET_ALL_FLOWERS = async (req, res) => {
  try {
    console.log("hitttt")
    const flowers = await FlowerModel.find();
    
    return res.status(200).json({ message: "All flowers", flowers: flowers });
  } catch (err) {
    
    console.log("HANDLED ERROR:", err);
    return res.status(500).json({ message: "Error happened to get all items" });
  }
};
const GET_FLOWER_BY_ID = async (req, res) => {
  try {
    const flower = await FlowerModel.findOne({id:req.params.id});

    return res.status(200).json({ message: "Flower by id", flower: flower });
  } catch (err) {
    console.log("HANDLED ERROR:", err);
    return res.status(500).json({ message: "Error get item by id" });
  }
};
const DELETE_FLOWER_BY_ID = async (req, res) => {
    try {
      const deletedFlower = await FlowerModel.findOneAndDelete({id:req.params.id});
        if (!deletedFlower){
            return res.status(401).json({message:'Flower by such id not found'})
        }
      return res.status(200).json({ message: `flower with id ${req.params.id} deleted`});
    } catch (err) {
      console.log("HANDLED ERROR:", err);
      return res.status(500).json({ message: "Error delete item by id" });
    }
  };
const UPDATE_FLOWER_BY_ID = async (req, res) => {
    try {
      const updatedFlower = await FlowerModel.findOneAndUpdate({id:req.params.id}, req.body,{new:true});
        if (!updatedFlower){
            return res.status(401).json({message:'Flower by such id not found',flower: updatedFlower})
        }
      return res.status(200).json({ message: 'item info was updated'});
    } catch (err) {
      console.log("HANDLED ERROR:", err);
      return res.status(500).json({ message: "Error delete item by id" });
    }
  };


export { GET_ALL_FLOWERS, POST_CREATE_FLOWER,GET_FLOWER_BY_ID,DELETE_FLOWER_BY_ID, UPDATE_FLOWER_BY_ID };
