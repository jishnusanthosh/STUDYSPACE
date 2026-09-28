import express from "express";
import jwt from "jsonwebtoken";
import students from "../data/data.js";

const secret = "abc123";

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    const firstuser = students[0];

    res.status(200).json({
      success: true,
      data: firstuser,
      message: "Data fetched successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/addstudent", (req, res, next) => {
  try {
    const newStudent = req.body;

    students.push(newStudent);

    res.status(201).json({
      success: true,
      data: newStudent,
      message: "Student added successfully",
    });
  } catch (error) {
    next(error);
  }
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

router.post("/login", (req, res, next) => {
  try {
    const token = jwt.sign(
      {
        userid: req.body.userid,
      },
      secret,
    );

    res.status(200).json({
      success: true,
      token: token,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/profile", (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const user = jwt.verify(token, secret);

    res.status(200).json({
      success: true,
      message: "Token verified",
      user: user,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
