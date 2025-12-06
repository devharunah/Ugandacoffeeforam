import { NextRequest, NextResponse } from 'next/server';
import supabase from '../../../lib/supabase-server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body?.email || '').trim();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }
    
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('user_emails')
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}