import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResend = () => {
    setIsSubmitted(false);
    setPhoneNumber('');
  };

  return (
    <>
      {!isSubmitted ? (
        <>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold mb-4">Şifrəni unutmusan?</h1>
            <p className="text-slate-600 font-normal">
              Narahat olmayın, biz sizə sıfırlama təlimatlarını göndərəcəyik.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefon nömrəsi</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Telefon nömrəniz" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600"
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
        <div className="text-center space-y-8">
          <h1 className="text-3xl font-semibold mb-4">Mesaj göndərildi</h1>
          <p className="text-slate-600 font-normal">
            +{phoneNumber} nömrəsinə şifrənizi sıfırlama linki göndərildi
          </p>

          <p className="text-sm text-slate-600">
            E-mail gəlmədi?{' '}
            <button 
              onClick={handleResend}
              className="text-brand-500 hover:underline font-medium"
            >
              Yenidən göndər
            </button>
          </p>

          <Button
            type="button"
            className="w-full bg-brand-500 hover:bg-brand-600"
            onClick={() => navigate('/login')}
          >
            Giriş et
          </Button>
        </div>
      )}
    </>
  );
};

export default ForgotPassword; 