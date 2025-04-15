import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from 'lucide-react'; // Assuming you use lucide-react for icons

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isResetSuccessful, setIsResetSuccessful] = useState(false); // State for success
  const navigate = useNavigate();
  // const { token } = useParams(); // Get the reset token from the URL if needed

  // Password validation states
  const isLengthValid = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch = password === confirmPassword && password !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLengthValid && hasSpecialChar && passwordsMatch) {
      // Here you would add the logic to reset the password using the token
      console.log("Password reset submitted with token:", /* token, */ password);
      // Instead of navigating, set the success state
      setIsResetSuccessful(true);
    }
  };

  return (
    <>
      {!isResetSuccessful ? (
        // Password Reset Form State
        <>
          <div className="mb-8 text-center mt-20">
            <h1 className="text-3xl font-semibold mb-4">Yeni şifrə yarat</h1>
            <p className="text-slate-600 font-normal">
              Yeni parolunuz əvvəllər istifadə edilən parollardan fərqli olmalıdır.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="password">Şifrə</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="***********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Şifrənin təkrarı</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                placeholder="***********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2"
                required
              />
            </div>

            {/* Password requirements */}
            <div className="space-y-2">
              <div className={`flex items-center text-sm ${isLengthValid ? 'text-green-600' : 'text-slate-500'}`}>
                <CheckCircle className={`mr-2 h-4 w-4 ${isLengthValid ? 'opacity-100' : 'opacity-50'}`} />
                Ən azı 8 simvol olmalıdır
              </div>
              <div className={`flex items-center text-sm ${hasSpecialChar ? 'text-green-600' : 'text-slate-500'}`}>
                <CheckCircle className={`mr-2 h-4 w-4 ${hasSpecialChar ? 'opacity-100' : 'opacity-50'}`} />
                Bir xüsusi simvol olmalıdır
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600"
              disabled={!isLengthValid || !hasSpecialChar || !passwordsMatch}
            >
              Şifrəni sıfırla
            </Button>
            
            <div className="text-center">
              <Link to="/login" className="text-sm text-slate-800 hover:underline">
                Giriş et
              </Link>
            </div>
          </form>
        </>
      ) : (
        // Success State
        <div className="text-center space-y-8 mt-10">
          <h1 className="text-3xl font-semibold mb-4">Şifrə sıfırlandı</h1>
          <p className="text-slate-600 font-normal">
            Parolunuz uğurla sıfırlandı. Daxil olmaq üçün aşağıya klikləyin.
          </p>
          <Button
            type="button"
            className="w-full bg-brand-500 hover:bg-brand-600"
            onClick={() => navigate('/login')}
          >
            Davam et
          </Button>
        </div>
      )}
    </>
  );
};

export default ResetPassword; 