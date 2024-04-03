import Footer from '@/src/components/Feature/Layouts/Footer';
import ButtonProfile from './ButtonProfile';
const data = [
    {
        title: 'Account',
    },
    {
        title: 'Notifications',
    },
    {
        title: 'Help',
    },
    {
        title: 'Storage and Data',
    },
    {
        title: 'Invite a friend',
    },
    {
        title: 'Logout',
    },
];
function Profile() {
    return (
        <div>
            <h1 className=" text-center pt-4 font-extrabold">Profile</h1>
            <div>
                {data.map((data, index) => {
                    return <ButtonProfile key={index} title={data.title} />;
                })}
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
