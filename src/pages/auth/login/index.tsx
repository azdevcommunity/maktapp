import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hesaba daxil ol</h1>
        <p className="text-slate-600">Xoş gəlmisiniz! Zəhmət olmasa məlumatları daxil edin</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="username">İstifadəçi adı</Label>
          <Input 
            id="username" 
            type="text" 
            placeholder="İstifadəçi adınız" 
            className='focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2'
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Şifrə</Label>
          <Input 
            id="password" 
            type="password" 
            placeholder="Şifrəniz" 
            className='focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2'
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember-me" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked === true)}
              className="h-4 w-4 rounded-[4px] border-[1px] border-slate-300 data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500"
            />
            <Label 
              htmlFor="remember-me" 
              className="text-sm font-normal cursor-pointer"
            >
              Məni yadda saxla
            </Label>
          </div>
          
          <Link to="/forgot-password" className="text-sm text-brand-500 hover:underline">
            Şifrəni unutmusunuz?
          </Link>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-brand-500 hover:bg-brand-600"
        >
          Daxil ol
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full border-slate-300"
        >
          Məktəb qeydiyyatı
        </Button>
      </form>
    </>
  );
};

export default Login; 