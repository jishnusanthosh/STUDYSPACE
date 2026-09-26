import express from "express";
import students from "../data/data.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  let firstuser = students[0];
  try {
    res.status(200).json({
      success: true,
      data: firstuser,
      message: "data fetched successfuly",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/addstudent", (req, res) => {
  const newStudent = req.body;

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
  });
});

router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    const student = students.find((student) => student.id === Number(id));

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    student.name = name;
    student.age = age;

    res.status(200).json({
      success: true,
      data: student,
      message: "Student updated successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
