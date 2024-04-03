'use client';

import Footer from '@/src/components/Feature/Layouts/Footer';
import ListContract from './components/ListContract';
import Button from '@/src/components/BaseUI/Button';

const data = [
    {
        icon: '☀️',
        text: 'Plan tasks.',
    },
    {
        icon: '🎯',
        text: 'Set goals.',
    },
    {
        icon: '⛹️',
        text: 'Take breaks.',
    },
    {
        icon: '💪',
        text: 'Move and refresh.',
    },
    {
        icon: '🗓',
        text: 'Prioritize.',
    },
    {
        icon: '🪞',
        text: 'Break task down.',
    },
];
function ContractPage() {
    return (
        <div>
            <div className=" pt-[50px] px-[30px]">
                <h2 className=" text-[20px] font-bold">
                    Let`s make a contract
                </h2>
                <h3 className=" font-medium pt-[20px]">I will</h3>
                <div>
                    <ul>
                        {data.map((list, index) => {
                            return (
                                <ListContract
                                    key={index}
                                    text={list.text}
                                    icon={list.icon}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className=" text-center pt-[50px]">
                <Button to="/transition" primary>
                    I AGREE
                </Button>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default ContractPage;
