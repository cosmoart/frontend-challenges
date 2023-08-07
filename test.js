{/* <tr>
	<td>
		<a href={project.url} target="_blank" rel="noopener noreferrer">
			<img src={project.img} width="100%" title="Advice Generator App" />
		</a>
		<a href={project.code} target="_blank" rel="noopener noreferrer">
			Advice Generator App
		</a>
	</td>
	<td>
		<img src="./public/assets/previews/article-preview-component.webp" width="100%" title="Article Preview Component" />
		Article Preview Component
	</td>
	<td>
		<img src="./public/assets/previews/expenses-chart-component.webp" width="100%" title="Desktop solution" />
		Expenses Chart Component
	</td>
</tr> */}

import projectsJSON from './src/assets/json/projects.json' assert { type: "json" };

let projects = "";

for (let i = 0; i < projectsJSON.length; i += 3) {
	const project = projectsJSON[i];

	projects += `
		<tr>
			<td>
				<a href=${project.url} target="_blank" rel="noopener noreferrer">
					<img src="./public/${project.img}" width="100%" title="${project.name}" />
				</a>
				<a href=${project.code} target="_blank" rel="noopener noreferrer">
					${project.name}
				</a>
			</td>
			<td>
				<a href=${projectsJSON[i + 1].url} target="_blank" rel="noopener noreferrer">
					<img src="./public/${projectsJSON[i + 1].img}" width="100%" title="${projectsJSON[i + 1].name}" />
				</a>
				<a href=${projectsJSON[i + 1].code} target="_blank" rel="noopener noreferrer">
					${projectsJSON[i + 1].name}
				</a>
			</td>
			<td>
				<a href=${projectsJSON[i + 2].url} target="_blank" rel="noopener noreferrer">
					<img src="./public/${projectsJSON[i + 2].img}" width="100%" title="${projectsJSON[i + 2].name}" />
				</a>
				<a href=${projectsJSON[i + 2].code} target="_blank" rel="noopener noreferrer">
					${projectsJSON[i + 2].name}
				</a>
			</td>
		</tr>
	`;
}

console.log(projects);