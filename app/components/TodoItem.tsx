"use client"

interface IProps {
	id: string
	title: string
	complete: boolean
	toggleTodo: (id: string, complete: boolean) => void
}

const TodoItem = ({ id, title, complete, toggleTodo }: IProps) => {
	return (
		<li className="flex items-center gap-1">
			<input
				id={id}
				type="checkbox"
				className="peer cursor-pointer"
				defaultChecked={complete}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label
				htmlFor={id}
				className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through"
			>
				{title}
			</label>
		</li>
	)
}
export default TodoItem
