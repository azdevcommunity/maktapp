import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Register = () => {
  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Məktəb qeydiyyatı</h1>
        <p className="text-slate-600">Xoş gəlmisiniz! Zəhmət olmasa məlumatları daxil edin</p>
      </div>
      
      <form className="space-y-6 mb-5">
        <div className="space-y-2">
          <Label htmlFor="schoolOwnership">Məktəbin mülkiyyət formasını seç</Label>
          <Select>
            <SelectTrigger className="w-full focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2" id="schoolOwnership">
              <SelectValue placeholder="Özəl" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Özəl</SelectItem>
              <SelectItem value="public">Dövlət</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="schoolName">Məktəbin adı</Label>
          <Input
            id="schoolName"
            type="text"
            placeholder="Məktəb adı"
            required
            className='focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2'
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="representative">Nümayəndə</Label>
          <Input
            id="representative"
            type="text"
            placeholder="Ad və soyadı"
            required
            className='focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2'
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="Email adresi"
            required
            className='focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2'
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon nömrə</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Telefon nömrəsi"
            required
            className='focus-visible:border-brand-500 focus-visible:ring-brand-500 focus-visible:ring-2'
          />
        </div>
        
        <Button
          type="submit"
          className="w-full bg-brand-500 hover:bg-brand-600"
        >
          Qeydiyyatdan keç
        </Button>

        <Button
          type="button"
          variant="outline"
          className="w-full border-slate-300"
        >
          Daxil ol
        </Button>
      </form>
    </>
  );
};

export default Register; 