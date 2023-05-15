interface Props {
    onSelectedCategory: (category: string) => void
}
const ExpenseFilter = ({ onSelectedCategory }: Props) => {
    return (
        <div className="mb-2">
            <label htmlFor="filter" className="form-label">Category</label>
            <select
                name="filter"
                className="form-select"
                onChange={(event) => onSelectedCategory(event.target.value)}
            >
                <option value="">All categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
            </select>
        </div>
    )
}

export default ExpenseFilter