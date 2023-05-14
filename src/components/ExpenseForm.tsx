import { FieldValues, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';


const schema = z.object({
    description: z.string().min(3),
    amount: z.number(),
    category: z.string()
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = () => {
    const [expenseList, setExpenseList] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
    const onSubmit = (data: FieldValues) => {

        console.log(expenseList);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="">
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