const BIN_URL = "https://api.jsonbin.io/v3/b/69864260d0ea881f40a62d4f";

const API_KEY = "$2a$10$jMxb.NG/95gw2SAy4SOIgO6cdH6n2frHTtrTQjgJyXRifHBGVITyu";

const output = document.getElementById("output");

async function getData() {
    const res = await fetch(BIN_URL, {
        headers: {
            "X-Master-Key": API_KEY,
        },
    });

    const data = await res.json();

    const students = data.record.students.map(
        (a) =>
        `
    <li>
       ${a.fName} ${a.lName} {${a.isStudent ? "Student" : "Not Student"}}
    </li>
    `,
    );

    output.innerHTML += students;
}