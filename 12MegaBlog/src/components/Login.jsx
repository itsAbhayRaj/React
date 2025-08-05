import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                }
                navigate("/")
            }
        } catch (error) {
            console.log("Login Error form", error);
            
            setError(error.message)
        }
    }
    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg
                bg-[#ABC8C0] rounded-lg p-10 borde border-black/10`}
            >
                <div className='mb-2 flex justify-center'>
                    <span className='inline-block w-full max-w-[40px]'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-center text-2xl font-bold
                    leading-tight'>Sign in to your Account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don&apos;t have an account?&nbsp;
                    <Link
                        to='/signup'
                        className='font-medium text-primary
                        transition-all duration-200 hover:underline'
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8
                 text-center'>{error}</p>}
                <form
                    onSubmit={handleSubmit(login)}
                    className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: 'Email is required',
                                validate: {
                                    matchPattern: (value) =>
                                        /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                            error={errors.email}
                        />
                        <Input
                            label="Password: "
                            placeholder="password..."
                            type='password'
                            {...register("password", {
                                required: 'Password is required',
                                validate: {
                                    matchPattern: (val) => {
                                        if (!val) return "Password is required";
                                        if (val.length < 8) return "Must be at least 8 characters";
                                        if (!/[A-Z]/.test(val)) return "Must contain at least one uppercase letter";
                                        if (!/[a-z]/.test(val)) return "Must contain at least one lowercase letter";
                                        if (!/\d/.test(val)) return "Must contain at least one number";
                                        if (/\s/.test(val)) return "No spaces allowed";
                                        return true;
                                    }

                                }
                            })}
                            error={errors.password}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                            >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login