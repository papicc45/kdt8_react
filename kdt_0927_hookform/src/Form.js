import {useForm} from "react-hook-form";

export default function Form() {
    const { register, handleSubmit, watch, formState : {errors} } = useForm();

    //handleSubmit : 첫번째 인자 - 유효할때 실행되는 함수(필수)
    // 두번쨰 인자 - 유효하지 않을때 실행되는 함수(선택)
    const onValid = (data) => {
        console.log(data);
    };

    // const onInvalid = (error) => {
    //     console.log('err', error);
    // };

    // console.log(watch('password'));
    console.log('errors', errors);

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input type="text" {...register('username', {
                    required : '이름을 입력하세요',
                    minLength : {
                        message : '최소 2글자 이상', value : 2
                    }
                })}/>
                <div>{errors.username?.message}</div>
                <input type="text" {...register('email', {
                            required : '이메일을 입력하세요',
                            validate : {
                                useGmail : (value)=> {
                                    return value.includes('gmail.com') || 'gmail로만 가입 가능합니다.';
                                }
                            }
                })}/>
                <div>{errors.email?.message}</div>
                <input type="text" {...register('password')}/>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
