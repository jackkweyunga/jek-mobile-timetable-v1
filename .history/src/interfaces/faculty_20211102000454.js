

export class Event {
    constructor(
        id,
        day,
        type,
        fromTime,
        toTime,
        duration,
        room,
        groups
    ) { 
        this.url = url;
        this.roomInfo = new roomInfo();
        this.day = day;
        this.type = type;
        this.fromTime = fromTime;
        this.duration = duration;
        this.room = room;
        this.groups = course;
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