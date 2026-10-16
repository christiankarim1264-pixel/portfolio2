import { useState } from 'react';

export default function SignUp() {
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit!");
  };

  return (
    <form action='/api/auth/signup' method='post' onSubmit={handleSubmit} className='flex flex-col gap-2 border-2 border-cyan-500 rounded-2xl p-4 mb-2'>
      <h1 className='font-bold text-3xl text-gray-900 mb-16'>Sign Up</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className='border-b-gray-400 border-b mb-8 hover:border-blue-700 hover:border-2 hover:rounded-2xl p-2'
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        className='border-b-gray-400 border-b mb-8 hover:border-blue-700 hover:border-2 hover:rounded-2xl p-2'
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className='border-b-gray-400 border-b mb-8 hover:border-blue-700 hover:border-2 hover:rounded-2xl p-2'
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className='border-b-gray-400 border-b mb-8 hover:border-blue-700 hover:border-2 hover:rounded-2xl p-2'
      />
      <button className='bg-blue-500 text-white text-shadow-2xs text-shadow-black w-[300px] h-[80px] self-center rounded-[8px]' type="submit">Sign Up</button>
      <p>Already have an account?{' '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <span className='text-blue-600'>Sign in</span>
          </a>
      </p>
    </form>
  );
}