'use client';
import Button from '@/src/components/BaseUI/Button';
import ButtonCircle from '@/src/components/BaseUI/ButtonCircle';
import Underlined from '@/src/components/Underlined';

function Page() {
    return (
        <div>
            <div className="flex flex-col items-center pt-[30px]">
                <p className=" text-[40px]">
                    Do your <br />
                    tasks <br />
                    quickly <br />
                    and easy
                </p>
                <p>Your tasks, your rules, our support</p>
            </div>
            <div className="pt-10 text-center">
                <Button to="/login" primary>
                    Login
                </Button>
            </div>
            <div className="pt-5 text-center">
                <Button to="/#">Create an account</Button>
            </div>
            <div className=" pb-[20px]">
                <Underlined />
            </div>
            <div className="flex justify-evenly">
                <ButtonCircle primary>
                    <img src="/Facebook-f_Logo.png" />
                </ButtonCircle>
                <ButtonCircle primary>
                    <img src="/Google_Pay-Logo.png" />
                </ButtonCircle>
                <ButtonCircle primary>
                    <img src="/Apple_Inc.-Logo.png" />
                </ButtonCircle>
            </div>
        </div>
    );
}

export default Page;
