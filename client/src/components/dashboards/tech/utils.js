export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${month}/${day} ${hours}:${minutes}`;
};


export const getNextAvailableTime = (currentTime, duration) => {
    let nextTime = new Date(currentTime.getTime() + 300000); // 5 minutes later

    while (true) {
        const day = nextTime.getDay();
        const hours = nextTime.getHours();

        // no weekends
        if (day === 0 || day === 6) {
            nextTime.setDate(nextTime.getDate() + (day === 0 ? 1 : 2));
            nextTime.setHours(9, 0, 0, 0); // Set to 9 AM
            continue;
        }

        // time betwen 9am and 5pm
        if (hours < 9) {
            nextTime.setHours(9, 0, 0, 0); // Set to 9 AM
        } else if (hours >= 17) {
            nextTime.setDate(nextTime.getDate() + 1);
            nextTime.setHours(9, 0, 0, 0); // Set to 9 AM
            continue;
        }

        const potentialEndTime = new Date(nextTime.getTime() + duration * 60000);
        if (potentialEndTime.getHours() >= 17) {
            nextTime.setDate(nextTime.getDate() + 1);
            nextTime.setHours(9, 0, 0, 0); // Set to 9 AM
            continue;
        }

        break;
    }

    return nextTime;
};