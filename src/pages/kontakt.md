---
title: Kontakt
---

Skriv en besked til os her!

<form>
    <div class="mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
            <label class="block">
            <span class="text-gray-700">Navn
            </span>
            <input type="text" class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
                " placeholder="">
            </label>
            <label class="block">
            <span class="text-gray-700">Email
            </span>
            <input type="email" class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
                " placeholder="john@example.com">
            </label>
            <div x-data="{ show_topic: false }">
                <label class="block">
                <span class="text-gray-700">Hvad omhandler beskeden?
                </span>
                <select class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    ">
                    <option @click="show_topic = false"> Optagelse i koret
                    </option>
                    <option @click="show_topic = false"> Booking af koret
                    </option>
                    <option @click="show_topic = true">Andet
                    </option>
                </select>
                </label>
                <label x-show="show_topic" class="block">
                <span class="text-gray-700">Emne
                </span>
                <input type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    " placeholder="">
                </label>
            </div>
            <label class="block">
            <span class="text-gray-700">Besked
            </span>
            <textarea class="
                mt-1
                block
                w-full
                rounded-md
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
                " rows="3">
                </textarea>
            </label>
        </div>
    </div>
</form>
