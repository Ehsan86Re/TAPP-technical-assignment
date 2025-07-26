import type { Metadata } from 'next';
import Image from 'next/image';
import { fetchUser } from '@/actions/fetchData';
import './page.css';

type Props = {
  params: Promise<{ id: number }>
  searchParams: Promise<{ name: string | string[] | undefined }>
};

export async function generateMetadata(
    { params, searchParams }: Props
): Promise<Metadata> {
    const id = (await params).id
    const name = (await searchParams).name

    return {
        title: `User Page - ID: ${id}`,
        description: `You can find more information about ${name} in this page!`,
    }
}

export default async function page({ params }: Props) {

    const userId = (await params).id;
    const user = await fetchUser(userId);

    return (
        <div className='container'>
            <div className='data-section flex-row items-center'>
                <div className='profile flex items-center justify-center'>
                    <Image src="/images/profile.png" alt="Profile Image" width={80} height={80} />
                </div>
                <div className='flex flex-col justify-between gap-4'>
                    <div>{`Name: ${user.name}`}</div>
                    <div>{`Username: @${user.username}`}</div>
                    <div>{`E-mail: ${user.email}`}</div>
                    <div>{`Phone: ${user.phone}`}</div>
                </div>
            </div>
            <div className='data-section flex-col'>
                {user.address && <div>{`Address: ${user.address.suite} - ${user.address.street} - ${user.address.city}`}</div>}
                {user.address && <div>{`Zipcode: ${user.address.zipcode}`}</div>}
                {user.company && <div>{`Compay: ${user.company.name}`}</div>}
                {user.website && <div>{`Website: ${user.website}`}</div>}
            </div>
        </div>
    )
}
