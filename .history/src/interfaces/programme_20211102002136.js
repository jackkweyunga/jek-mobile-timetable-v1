

export class Event {
    constructor(
        id,
        day,
        type,
        fromTime,
        toTime,
        room,
        groups
    ) { 
        this.id = id;
        this.day = day;
        this.type = type;
        this.fromTime = fromTime;
        this.room = room;
        this.groups = groups;
        this.toTime = toTime;
    }
}

export class Programme {

    constructor(
        events
    ) { 
        this.events = events;
    }
}