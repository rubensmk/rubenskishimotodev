export async function getProjects() {
    const response = await fetch('https://rubenskishimotodev-default-rtdb.firebaseio.com/projects.json');
    const data = await response.json();

    const projects = []

    for (const key in data) {
        projects.push({
            project_id: key,
            ...data[key]
        })
    }

    return projects;
}