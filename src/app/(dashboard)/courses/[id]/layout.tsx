import { getCourseByCourseId, getCourseClasses } from "@/actions/courses";
import getCurrentUser from "@/actions/getCurrentUser";
import ClassSidebar from "@/components/classSidebar";
import "@/styles/globals.css";
import { get } from "lodash";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Classes",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params:any
}>) {
    const classes = await getCourseClasses(params.id)
    const currentUser = await getCurrentUser()
    const course = await getCourseByCourseId(params.id)


    return (
        <>
            <div className="flex w-full">
                <ClassSidebar params={params} currentUser={currentUser} title={course?.title} classes={classes}/>
                <div className="flex-1">{children}</div>
            </div>
        </>
    );
}

