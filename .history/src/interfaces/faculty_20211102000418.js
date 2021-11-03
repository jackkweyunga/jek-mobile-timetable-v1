

export class Event {
    constructor(
        url,
        day,
        type,
        fromTime,
        toTime,
        duration,
        room,
        course
    ) { 
        this.url = url;
        this.roomInfo = new roomInfo();
        this.day = day;
        this.type = type;
        this.fromTime = fromTime;
        this.duration = duration;
        this.room = room;
        this.course = course;
        this.toTime = toTime;
    }
}

export class Programme {

    constructor(
        events
    ) { 
        this.evnts = events;
    }
}