"use client";

import { Eye, EyeOff, User, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { useLogin } from '@/features/auth/hooks/useLogin';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isLoading,
    showPassword,
    togglePassword,
  } = useLogin();

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-blue-50 via-slate-50 to-gray-100"></div>
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-slate-200 mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg bg-emerald-500">
            <p className='text-white font-bold text-4xl'>H</p>
          </div>

          <h1 className="text-4xl font-bold text-slate-800 mb-2">Healty App</h1>
          <p className="text-slate-600">Internal Dashboard Teams</p>
        </div>

        <Card className="bg-white border-slate-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-800">Welcome Back</CardTitle>
            <CardDescription className="text-slate-600">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-700"> Username </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                  <Input
                    id="username"
                    type="text"
                    autoComplete="text"
                    placeholder="Input your username"
                    {...register('username')}
                    className={`pl-11 bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus-visible:ring-blue-500
                      ${ errors.username
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                      }`
                    }
                  />
                </div>
                {errors.username && (
                  <p className="text-sm text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700"> Password </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    {...register('password')}
                    className={`pl-11 pr-12 bg-white border-slate-200 text-slate-800 placeholder:text-slate-400 focus-visible:ring-blue-500
                      ${ errors.password
                        ? 'border-red-500 focus-visible:ring-red-500'
                        : ''
                      }`
                    }
                  />
                  <Button
                    type="button"
                    size="icon"
                    onClick={togglePassword}
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent text-slate-400 hover:text-slate-700 hover:bg-slate-100/70 focus-visible:ring-0 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end">
                <div className="relative group inline-block">
                  <span className="text-slate-800 text-sm cursor-pointer"> Forgot password? </span>
                  
                  <div className="absolute right-0 bottom-full mb-2 w-max max-w-xs rounded-md border border-slate-200 bg-white text-sm text-slate-800 p-2 shadow-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none overflow-visible z-10">
                    Contact Administrator
                  </div>
                </div>
              </div>

              <Button
                type='submit'
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                <> Sign In </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-xs text-slate-500">
          © 2026 Healty App By Abdul Rahman Alhafizh. All rights reserved.
        </p>
      </div>
    </main>
  )
};