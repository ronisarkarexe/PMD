import { NextResponse, NextRequest } from "next/server";
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
