import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
    onSubmit: (data: FormData) => void
}

const schema = z.object({
    description: z.string().min(3),
    amount: z.number(),
    category: z.string()
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

    return (
        <>
            <form onSubmit={handleSubmit(data => {
                onSubmit(data)
                reset()
            })}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        {...register('description')}
                        name="description"
                        type="text"
                        className="form-control"
                    />
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                        {...register('amount', { valueAsNumber: true })}
                        name="amount"
                        type="text"
                        className="form-control"
                    />
                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}

                </div>

                <div className="mb-2">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                        {...register('category')}
                        name="category"
                        className="form-select"
                    >
                        <option value="groceries">Groceries</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                </div>

                <button disabled={!errors} className="btn btn-primary" type="submit">Sumbit</button>
            </form>
        </>
    )
}

export default ExpenseForm