'use client'

export const AltDonate = () => {
    return (
        <div>
            <h1 className="text-5xl text-[#0F973D] font-semibold mb-20 text-center hover:underline underline-offset-4">OR</h1>

            <div className="w-screen relative">
                <div className="flex items-center justify-center h-full">
                    <h1></h1>
                    <div className="bg-black text-white border-4 border-white p-8 m-4 rounded-3xl shadow-2xl max-w-4xl w-full">
                        <h2 className="text-3xl font-semibold mb-6 text-center">Account Details</h2>

                        <div className="space-y-6">
                            <div className="flex justify-between text-lg">
                                <div className="font-medium">Bank Name:</div>
                                <div className="text-gray-300">Guaranty Trust Bank (GTB)</div>
                            </div>

                            <div className="flex justify-between text-lg">
                                <div className="font-medium">Account Number:</div>
                                <div className="text-gray-300">0228386891</div>
                            </div>

                            <div className="flex justify-between text-lg">
                                <div className="font-medium">Account Name:</div>
                                <div className="text-gray-300">COHI -- MSSN LAGOS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
