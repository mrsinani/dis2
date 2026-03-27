import { fetchData } from "@/lib/fetchData";
import { Affiliate } from "@/types/Affiliates";
import { Box } from "@mui/material";

export default async function Home() {
  const data = await fetchData();
  console.log(data);
  const students = data.record.students;

  return (
    <>
      {students.map((x: Affiliate, i: number) => (
        <Box key={i}
        sx={{
          width: "300%",
          height: "300%",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          bgcolor: "grey.200",
          p: 2,
          borderRadius: 1,
          border: "1px solid grey.300",
        }}
        >
            <h1>{x.fName} {x.lName}</h1>
            <p>{x.isStudent ? "Student" : "Not Student"}</p>
        </Box>
      ))}
    </>
  );
}
