import {useForm} from "react-hook-form";

export default function PracComponent() {
    const { register, handleSubmit, watch, formState : {errors} } = useForm();

    const onValid = (data) => {
        console.log(data);
    }
return (
    <>
        <form onSubmit={handleSubmit(onValid)}>
            <input type="text" {...register('name', {
                required : '이름은 필수항목입니다.'
            })}/>
            <div>{errors.name?.message}</div>
            <input type="number" {...register('age', {
                min : {
                    message : '0 이상의 숫자만 입력가능합니다.',
                    value : 0
                }
            })}/>
            <div>{errors.age?.message}</div>
            <button type="submit">제출</button>
        </form>
    </>
);
}