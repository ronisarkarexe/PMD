import { NextResponse, NextRequest } from "next/server";
import fsPromises from "fs/promises";
import path from "path";

const projectsFile = path.join(process.cwd(), "public/mocks/projects.json");

export async function GET(request, { params }) {
  const id = params.id;
  try {
    const projectsList = await fsPromises.readFile(projectsFile, "utf-8");
    const json = JSON.parse(projectsList);
    const project = json.find((item) => item.id === id);
    return NextResponse.json(project);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "No projects found!", status: 404 })
    );
  }
}
