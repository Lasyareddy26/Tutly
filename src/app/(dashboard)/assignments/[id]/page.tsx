import { getAssignmentDetailsById } from "@/actions/getAssignments";
import Link from "next/link";

export default async function SubmmitAssignment({
  params,
}: {
  params: { id: string };
}) {
  const assignment = await getAssignmentDetailsById(params.id);
  return (
    <div className="mx-10 my-2">
      <h1 className="text-center p-2 bg-primary-600 rounded">
        Assignment Submission : {assignment?.title}
      </h1>
      <div className="flex items-center justify-between my-4">
        <p className="rounded p-1 px-2 bg-secondary-700">
          # {assignment?.class?.course?.title}
        </p>
        <div className={`p-1 rounded bg-secondary-700 ${assignment?.dueDate != null && (new Date(assignment?.dueDate) > (new Date())) ? "bg-primary-600" : "bg-secondary-700"}`}>{`${assignment?.dueDate === null ? "No last date" : assignment?.dueDate
          }`}</div>
      </div>

      <div className="border p-2 my-2 rounded">Details</div>
      <div className="min-h-[100px]">{`${assignment?.details === null
          ? "No details given to show"
          : assignment?.details
        }`}</div>
      <div className="flex gap-8 items-center my-4">
        <div>
          <a target="_blank" href={`${assignment?.link}`} className="bg-primary-600 p-2 px-4 text-sm rounded font-semibold">Link</a>
        </div>
        <div>
          <Link
            href={`/playground/html-css-js?attachmentId=${params.id}`}
            className="bg-primary-600 p-2 text-sm rounded font-semibold"
          >
            Submit through Playground
          </Link>
        </div>
      </div>

      data 
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}
