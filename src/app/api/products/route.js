import { NextResponse } from "next/server";
import fsPromises from "fs/promises";
import path from "path";

const projectsFile = path.join(process.cwd(), "public/mocks/projects.json");

export const GET = async () => {
  try {
    const projectsList = await fsPromises.readFile(projectsFile, "utf-8");
    const json = JSON.parse(projectsList);
    return NextResponse.json(json);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "No projects found!", status: 404 })
    );
  }
};

export const DELETE = async (req) => {
  try {
    const { id } = await req.json();
    const projectsList = await fsPromises.readFile(projectsFile, "utf-8");
    const json = JSON.parse(projectsList);
    const projectIndex = json.findIndex((project) => project.id === id);
    if (projectIndex < 0) {
      return new NextResponse(
        JSON.stringify({ message: "Project not found!", status: 404 })
      );
    }
    json.splice(projectIndex, 1);
    const updatedData = JSON.stringify(json);
    await fsPromises.writeFile(projectsFile, updatedData);

    return new NextResponse(
      JSON.stringify({ message: "Project deleted successfully!", status: 200 })
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!", status: 500 })
    );
  }
};
