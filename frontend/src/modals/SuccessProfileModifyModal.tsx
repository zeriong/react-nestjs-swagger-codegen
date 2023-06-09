import React, {Fragment, SetStateAction, useEffect, useState} from "react";
import {Dialog, Transition } from "@headlessui/react";

export const SuccessProfileModifyModal = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <Transition appear show={isShow} as={Fragment}>
                <Dialog as="div" className="relative z-20" onClose={()=>setIsShow(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-lg bg-white p-6 md:p-8 text-left align-middle shadow-xl transition-all">
                                    <div className="text-2xl mb-5">
                                        회원정보 수정완료!
                                    </div>
                                    <div className="mb-6">
                                        수정된 프로필로 이동합니다.
                                    </div>
                                    <div className="w-[160px] flex justify-center cursor-pointer
                                    rounded-2xl p-1 bg-orange-500 text-white m-auto"
                                         onClick={()=>!isShow}>
                                        확인
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};