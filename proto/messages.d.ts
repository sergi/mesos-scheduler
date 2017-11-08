import * as $protobuf from "protobufjs";

/** Namespace mesos. */
export namespace mesos {

    /** Properties of a FrameworkID. */
    interface IFrameworkID {

        /** FrameworkID value */
        value: string;
    }

    /**
     * A unique ID assigned to a framework. A framework can reuse this ID
     * in order to do failover (see MesosSchedulerDriver).
     */
    class FrameworkID {

        /**
         * Constructs a new FrameworkID.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IFrameworkID);

        /** FrameworkID value. */
        public value: string;

        /**
         * Creates a new FrameworkID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FrameworkID instance
         */
        public static create(properties?: mesos.IFrameworkID): mesos.FrameworkID;

        /**
         * Encodes the specified FrameworkID message. Does not implicitly {@link mesos.FrameworkID.verify|verify} messages.
         * @param message FrameworkID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IFrameworkID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FrameworkID message, length delimited. Does not implicitly {@link mesos.FrameworkID.verify|verify} messages.
         * @param message FrameworkID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IFrameworkID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FrameworkID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FrameworkID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.FrameworkID;

        /**
         * Decodes a FrameworkID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FrameworkID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.FrameworkID;

        /**
         * Verifies a FrameworkID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FrameworkID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FrameworkID
         */
        public static fromObject(object: { [k: string]: any }): mesos.FrameworkID;

        /**
         * Creates a plain object from a FrameworkID message. Also converts values to other types if specified.
         * @param message FrameworkID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.FrameworkID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FrameworkID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OfferID. */
    interface IOfferID {

        /** OfferID value */
        value: string;
    }

    /** A unique ID assigned to an offer. */
    class OfferID {

        /**
         * Constructs a new OfferID.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IOfferID);

        /** OfferID value. */
        public value: string;

        /**
         * Creates a new OfferID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OfferID instance
         */
        public static create(properties?: mesos.IOfferID): mesos.OfferID;

        /**
         * Encodes the specified OfferID message. Does not implicitly {@link mesos.OfferID.verify|verify} messages.
         * @param message OfferID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IOfferID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OfferID message, length delimited. Does not implicitly {@link mesos.OfferID.verify|verify} messages.
         * @param message OfferID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IOfferID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OfferID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OfferID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.OfferID;

        /**
         * Decodes an OfferID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OfferID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.OfferID;

        /**
         * Verifies an OfferID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OfferID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OfferID
         */
        public static fromObject(object: { [k: string]: any }): mesos.OfferID;

        /**
         * Creates a plain object from an OfferID message. Also converts values to other types if specified.
         * @param message OfferID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.OfferID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OfferID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AgentID. */
    interface IAgentID {

        /** AgentID value */
        value: string;
    }

    /**
     * A unique ID assigned to an agent. Currently, an agent gets a new ID
     * whenever it (re)registers with Mesos. Framework writers shouldn't
     * assume any binding between an agent ID and and a hostname.
     */
    class AgentID {

        /**
         * Constructs a new AgentID.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IAgentID);

        /** AgentID value. */
        public value: string;

        /**
         * Creates a new AgentID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AgentID instance
         */
        public static create(properties?: mesos.IAgentID): mesos.AgentID;

        /**
         * Encodes the specified AgentID message. Does not implicitly {@link mesos.AgentID.verify|verify} messages.
         * @param message AgentID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IAgentID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgentID message, length delimited. Does not implicitly {@link mesos.AgentID.verify|verify} messages.
         * @param message AgentID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IAgentID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgentID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgentID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.AgentID;

        /**
         * Decodes an AgentID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgentID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.AgentID;

        /**
         * Verifies an AgentID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AgentID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AgentID
         */
        public static fromObject(object: { [k: string]: any }): mesos.AgentID;

        /**
         * Creates a plain object from an AgentID message. Also converts values to other types if specified.
         * @param message AgentID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.AgentID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AgentID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskID. */
    interface ITaskID {

        /** TaskID value */
        value: string;
    }

    /**
     * A framework-generated ID to distinguish a task. The ID must remain
     * unique while the task is active. A framework can reuse an ID _only_
     * if the previous task with the same ID has reached a terminal state
     * (e.g., TASK_FINISHED, TASK_LOST, TASK_KILLED, etc.). However,
     * reusing task IDs is strongly discouraged (MESOS-2198).
     */
    class TaskID {

        /**
         * Constructs a new TaskID.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITaskID);

        /** TaskID value. */
        public value: string;

        /**
         * Creates a new TaskID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskID instance
         */
        public static create(properties?: mesos.ITaskID): mesos.TaskID;

        /**
         * Encodes the specified TaskID message. Does not implicitly {@link mesos.TaskID.verify|verify} messages.
         * @param message TaskID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITaskID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskID message, length delimited. Does not implicitly {@link mesos.TaskID.verify|verify} messages.
         * @param message TaskID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITaskID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TaskID;

        /**
         * Decodes a TaskID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TaskID;

        /**
         * Verifies a TaskID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskID
         */
        public static fromObject(object: { [k: string]: any }): mesos.TaskID;

        /**
         * Creates a plain object from a TaskID message. Also converts values to other types if specified.
         * @param message TaskID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.TaskID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExecutorID. */
    interface IExecutorID {

        /** ExecutorID value */
        value: string;
    }

    /**
     * A framework-generated ID to distinguish an executor. Only one
     * executor with the same ID can be active on the same agent at a
     * time. However, reusing executor IDs is discouraged.
     */
    class ExecutorID {

        /**
         * Constructs a new ExecutorID.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IExecutorID);

        /** ExecutorID value. */
        public value: string;

        /**
         * Creates a new ExecutorID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecutorID instance
         */
        public static create(properties?: mesos.IExecutorID): mesos.ExecutorID;

        /**
         * Encodes the specified ExecutorID message. Does not implicitly {@link mesos.ExecutorID.verify|verify} messages.
         * @param message ExecutorID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IExecutorID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecutorID message, length delimited. Does not implicitly {@link mesos.ExecutorID.verify|verify} messages.
         * @param message ExecutorID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IExecutorID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecutorID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecutorID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ExecutorID;

        /**
         * Decodes an ExecutorID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecutorID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ExecutorID;

        /**
         * Verifies an ExecutorID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecutorID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecutorID
         */
        public static fromObject(object: { [k: string]: any }): mesos.ExecutorID;

        /**
         * Creates a plain object from an ExecutorID message. Also converts values to other types if specified.
         * @param message ExecutorID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.ExecutorID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecutorID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContainerID. */
    interface IContainerID {

        /** ContainerID value */
        value: string;

        /** ContainerID parent */
        parent?: mesos.IContainerID;
    }

    /**
     * ID used to uniquely identify a container. If the `parent` is not
     * specified, the ID is a UUID generated by the agent to uniquely
     * identify the container of an executor run. If the `parent` field is
     * specified, it represents a nested container.
     */
    class ContainerID {

        /**
         * Constructs a new ContainerID.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IContainerID);

        /** ContainerID value. */
        public value: string;

        /** ContainerID parent. */
        public parent?: (mesos.IContainerID|null);

        /**
         * Creates a new ContainerID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainerID instance
         */
        public static create(properties?: mesos.IContainerID): mesos.ContainerID;

        /**
         * Encodes the specified ContainerID message. Does not implicitly {@link mesos.ContainerID.verify|verify} messages.
         * @param message ContainerID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IContainerID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainerID message, length delimited. Does not implicitly {@link mesos.ContainerID.verify|verify} messages.
         * @param message ContainerID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IContainerID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainerID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainerID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ContainerID;

        /**
         * Decodes a ContainerID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainerID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ContainerID;

        /**
         * Verifies a ContainerID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContainerID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainerID
         */
        public static fromObject(object: { [k: string]: any }): mesos.ContainerID;

        /**
         * Creates a plain object from a ContainerID message. Also converts values to other types if specified.
         * @param message ContainerID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.ContainerID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainerID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimeInfo. */
    interface ITimeInfo {

        /** TimeInfo nanoseconds */
        nanoseconds: (number|Long);
    }

    /** Represents time since the epoch, in nanoseconds. */
    class TimeInfo {

        /**
         * Constructs a new TimeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITimeInfo);

        /** TimeInfo nanoseconds. */
        public nanoseconds: (number|Long);

        /**
         * Creates a new TimeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeInfo instance
         */
        public static create(properties?: mesos.ITimeInfo): mesos.TimeInfo;

        /**
         * Encodes the specified TimeInfo message. Does not implicitly {@link mesos.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeInfo message, length delimited. Does not implicitly {@link mesos.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TimeInfo;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TimeInfo;

        /**
         * Verifies a TimeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.TimeInfo;

        /**
         * Creates a plain object from a TimeInfo message. Also converts values to other types if specified.
         * @param message TimeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.TimeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DurationInfo. */
    interface IDurationInfo {

        /** DurationInfo nanoseconds */
        nanoseconds: (number|Long);
    }

    /** Represents duration in nanoseconds. */
    class DurationInfo {

        /**
         * Constructs a new DurationInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IDurationInfo);

        /** DurationInfo nanoseconds. */
        public nanoseconds: (number|Long);

        /**
         * Creates a new DurationInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DurationInfo instance
         */
        public static create(properties?: mesos.IDurationInfo): mesos.DurationInfo;

        /**
         * Encodes the specified DurationInfo message. Does not implicitly {@link mesos.DurationInfo.verify|verify} messages.
         * @param message DurationInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IDurationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DurationInfo message, length delimited. Does not implicitly {@link mesos.DurationInfo.verify|verify} messages.
         * @param message DurationInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IDurationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DurationInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DurationInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.DurationInfo;

        /**
         * Decodes a DurationInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DurationInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.DurationInfo;

        /**
         * Verifies a DurationInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DurationInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DurationInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.DurationInfo;

        /**
         * Creates a plain object from a DurationInfo message. Also converts values to other types if specified.
         * @param message DurationInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.DurationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DurationInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Address. */
    interface IAddress {

        /** Address hostname */
        hostname?: string;

        /** Address ip */
        ip?: string;

        /** Address port */
        port: number;
    }

    /**
     * A network address.
     *
     * TODO(bmahler): Use this more widely.
     */
    class Address {

        /**
         * Constructs a new Address.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IAddress);

        /** Address hostname. */
        public hostname: string;

        /** Address ip. */
        public ip: string;

        /** Address port. */
        public port: number;

        /**
         * Creates a new Address instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Address instance
         */
        public static create(properties?: mesos.IAddress): mesos.Address;

        /**
         * Encodes the specified Address message. Does not implicitly {@link mesos.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link mesos.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Address;

        /**
         * Decodes an Address message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Address;

        /**
         * Verifies an Address message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Address
         */
        public static fromObject(object: { [k: string]: any }): mesos.Address;

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @param message Address
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Address to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a URL. */
    interface IURL {

        /** URL scheme */
        scheme: string;

        /** URL address */
        address: mesos.IAddress;

        /** URL path */
        path?: string;

        /** URL query */
        query?: mesos.IParameter[];

        /** URL fragment */
        fragment?: string;
    }

    /** Represents a URL. */
    class URL {

        /**
         * Constructs a new URL.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IURL);

        /** URL scheme. */
        public scheme: string;

        /** URL address. */
        public address: mesos.IAddress;

        /** URL path. */
        public path: string;

        /** URL query. */
        public query: mesos.IParameter[];

        /** URL fragment. */
        public fragment: string;

        /**
         * Creates a new URL instance using the specified properties.
         * @param [properties] Properties to set
         * @returns URL instance
         */
        public static create(properties?: mesos.IURL): mesos.URL;

        /**
         * Encodes the specified URL message. Does not implicitly {@link mesos.URL.verify|verify} messages.
         * @param message URL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IURL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified URL message, length delimited. Does not implicitly {@link mesos.URL.verify|verify} messages.
         * @param message URL message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IURL, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a URL message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns URL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.URL;

        /**
         * Decodes a URL message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns URL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.URL;

        /**
         * Verifies a URL message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a URL message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns URL
         */
        public static fromObject(object: { [k: string]: any }): mesos.URL;

        /**
         * Creates a plain object from a URL message. Also converts values to other types if specified.
         * @param message URL
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.URL, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this URL to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Unavailability. */
    interface IUnavailability {

        /** Unavailability start */
        start: mesos.ITimeInfo;

        /** Unavailability duration */
        duration?: mesos.IDurationInfo;
    }

    /**
     * Represents an interval, from a given start time over a given duration.
     * This interval pertains to an unavailability event, such as maintenance,
     * and is not a generic interval.
     */
    class Unavailability {

        /**
         * Constructs a new Unavailability.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IUnavailability);

        /** Unavailability start. */
        public start: mesos.ITimeInfo;

        /** Unavailability duration. */
        public duration?: (mesos.IDurationInfo|null);

        /**
         * Creates a new Unavailability instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Unavailability instance
         */
        public static create(properties?: mesos.IUnavailability): mesos.Unavailability;

        /**
         * Encodes the specified Unavailability message. Does not implicitly {@link mesos.Unavailability.verify|verify} messages.
         * @param message Unavailability message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IUnavailability, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Unavailability message, length delimited. Does not implicitly {@link mesos.Unavailability.verify|verify} messages.
         * @param message Unavailability message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IUnavailability, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Unavailability message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Unavailability
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Unavailability;

        /**
         * Decodes an Unavailability message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Unavailability
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Unavailability;

        /**
         * Verifies an Unavailability message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Unavailability message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Unavailability
         */
        public static fromObject(object: { [k: string]: any }): mesos.Unavailability;

        /**
         * Creates a plain object from an Unavailability message. Also converts values to other types if specified.
         * @param message Unavailability
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Unavailability, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Unavailability to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MachineID. */
    interface IMachineID {

        /** MachineID hostname */
        hostname?: string;

        /** MachineID ip */
        ip?: string;
    }

    /**
     * Represents a single machine, which may hold one or more agents.
     *
     * NOTE: In order to match an agent to a machine, both the `hostname` and
     * `ip` must match the values advertised by the agent to the master.
     * Hostname is not case-sensitive.
     */
    class MachineID {

        /**
         * Constructs a new MachineID.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IMachineID);

        /** MachineID hostname. */
        public hostname: string;

        /** MachineID ip. */
        public ip: string;

        /**
         * Creates a new MachineID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MachineID instance
         */
        public static create(properties?: mesos.IMachineID): mesos.MachineID;

        /**
         * Encodes the specified MachineID message. Does not implicitly {@link mesos.MachineID.verify|verify} messages.
         * @param message MachineID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IMachineID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MachineID message, length delimited. Does not implicitly {@link mesos.MachineID.verify|verify} messages.
         * @param message MachineID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IMachineID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MachineID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MachineID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.MachineID;

        /**
         * Decodes a MachineID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MachineID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.MachineID;

        /**
         * Verifies a MachineID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MachineID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MachineID
         */
        public static fromObject(object: { [k: string]: any }): mesos.MachineID;

        /**
         * Creates a plain object from a MachineID message. Also converts values to other types if specified.
         * @param message MachineID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.MachineID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MachineID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MachineInfo. */
    interface IMachineInfo {

        /** MachineInfo id */
        id: mesos.IMachineID;

        /** MachineInfo mode */
        mode?: mesos.MachineInfo.Mode;

        /** MachineInfo unavailability */
        unavailability?: mesos.IUnavailability;
    }

    /**
     * Holds information about a single machine, its `mode`, and any other
     * relevant information which may affect the behavior of the machine.
     */
    class MachineInfo {

        /**
         * Constructs a new MachineInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IMachineInfo);

        /** MachineInfo id. */
        public id: mesos.IMachineID;

        /** MachineInfo mode. */
        public mode: mesos.MachineInfo.Mode;

        /** MachineInfo unavailability. */
        public unavailability?: (mesos.IUnavailability|null);

        /**
         * Creates a new MachineInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MachineInfo instance
         */
        public static create(properties?: mesos.IMachineInfo): mesos.MachineInfo;

        /**
         * Encodes the specified MachineInfo message. Does not implicitly {@link mesos.MachineInfo.verify|verify} messages.
         * @param message MachineInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IMachineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MachineInfo message, length delimited. Does not implicitly {@link mesos.MachineInfo.verify|verify} messages.
         * @param message MachineInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IMachineInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MachineInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MachineInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.MachineInfo;

        /**
         * Decodes a MachineInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MachineInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.MachineInfo;

        /**
         * Verifies a MachineInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MachineInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MachineInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.MachineInfo;

        /**
         * Creates a plain object from a MachineInfo message. Also converts values to other types if specified.
         * @param message MachineInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.MachineInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MachineInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MachineInfo {

        /** Mode enum. */
        enum Mode {
            UP = 1,
            DRAINING = 2,
            DOWN = 3
        }
    }

    /** Properties of a FrameworkInfo. */
    interface IFrameworkInfo {

        /** FrameworkInfo user */
        user: string;

        /** FrameworkInfo name */
        name: string;

        /** FrameworkInfo id */
        id?: mesos.IFrameworkID;

        /** FrameworkInfo failoverTimeout */
        failoverTimeout?: number;

        /** FrameworkInfo checkpoint */
        checkpoint?: boolean;

        /** FrameworkInfo role */
        role?: string;

        /** FrameworkInfo roles */
        roles?: string[];

        /** FrameworkInfo hostname */
        hostname?: string;

        /** FrameworkInfo principal */
        principal?: string;

        /** FrameworkInfo webuiUrl */
        webuiUrl?: string;

        /** FrameworkInfo capabilities */
        capabilities?: mesos.FrameworkInfo.ICapability[];

        /** FrameworkInfo labels */
        labels?: mesos.ILabels;
    }

    /** Describes a framework. */
    class FrameworkInfo {

        /**
         * Constructs a new FrameworkInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IFrameworkInfo);

        /** FrameworkInfo user. */
        public user: string;

        /** FrameworkInfo name. */
        public name: string;

        /** FrameworkInfo id. */
        public id?: (mesos.IFrameworkID|null);

        /** FrameworkInfo failoverTimeout. */
        public failoverTimeout: number;

        /** FrameworkInfo checkpoint. */
        public checkpoint: boolean;

        /** FrameworkInfo role. */
        public role: string;

        /** FrameworkInfo roles. */
        public roles: string[];

        /** FrameworkInfo hostname. */
        public hostname: string;

        /** FrameworkInfo principal. */
        public principal: string;

        /** FrameworkInfo webuiUrl. */
        public webuiUrl: string;

        /** FrameworkInfo capabilities. */
        public capabilities: mesos.FrameworkInfo.ICapability[];

        /** FrameworkInfo labels. */
        public labels?: (mesos.ILabels|null);

        /**
         * Creates a new FrameworkInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FrameworkInfo instance
         */
        public static create(properties?: mesos.IFrameworkInfo): mesos.FrameworkInfo;

        /**
         * Encodes the specified FrameworkInfo message. Does not implicitly {@link mesos.FrameworkInfo.verify|verify} messages.
         * @param message FrameworkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IFrameworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FrameworkInfo message, length delimited. Does not implicitly {@link mesos.FrameworkInfo.verify|verify} messages.
         * @param message FrameworkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IFrameworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FrameworkInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FrameworkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.FrameworkInfo;

        /**
         * Decodes a FrameworkInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FrameworkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.FrameworkInfo;

        /**
         * Verifies a FrameworkInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FrameworkInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FrameworkInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.FrameworkInfo;

        /**
         * Creates a plain object from a FrameworkInfo message. Also converts values to other types if specified.
         * @param message FrameworkInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.FrameworkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FrameworkInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace FrameworkInfo {

        /** Properties of a Capability. */
        interface ICapability {

            /** Capability type */
            type?: mesos.FrameworkInfo.Capability.Type;
        }

        /** Represents a Capability. */
        class Capability {

            /**
             * Constructs a new Capability.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.FrameworkInfo.ICapability);

            /** Capability type. */
            public type: mesos.FrameworkInfo.Capability.Type;

            /**
             * Creates a new Capability instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Capability instance
             */
            public static create(properties?: mesos.FrameworkInfo.ICapability): mesos.FrameworkInfo.Capability;

            /**
             * Encodes the specified Capability message. Does not implicitly {@link mesos.FrameworkInfo.Capability.verify|verify} messages.
             * @param message Capability message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.FrameworkInfo.ICapability, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Capability message, length delimited. Does not implicitly {@link mesos.FrameworkInfo.Capability.verify|verify} messages.
             * @param message Capability message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.FrameworkInfo.ICapability, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Capability message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Capability
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.FrameworkInfo.Capability;

            /**
             * Decodes a Capability message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Capability
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.FrameworkInfo.Capability;

            /**
             * Verifies a Capability message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Capability message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Capability
             */
            public static fromObject(object: { [k: string]: any }): mesos.FrameworkInfo.Capability;

            /**
             * Creates a plain object from a Capability message. Also converts values to other types if specified.
             * @param message Capability
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.FrameworkInfo.Capability, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Capability to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Capability {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                REVOCABLE_RESOURCES = 1,
                TASK_KILLING_STATE = 2,
                GPU_RESOURCES = 3,
                SHARED_RESOURCES = 4,
                PARTITION_AWARE = 5,
                MULTI_ROLE = 6
            }
        }
    }

    /** Properties of a CheckInfo. */
    interface ICheckInfo {

        /** CheckInfo type */
        type?: mesos.CheckInfo.Type;

        /** CheckInfo command */
        command?: mesos.CheckInfo.ICommand;

        /** CheckInfo http */
        http?: mesos.CheckInfo.IHttp;

        /** CheckInfo delaySeconds */
        delaySeconds?: number;

        /** CheckInfo intervalSeconds */
        intervalSeconds?: number;

        /** CheckInfo timeoutSeconds */
        timeoutSeconds?: number;
    }

    /**
     * Describes a general non-interpreting non-killing check for a task or
     * executor (or any arbitrary process/command). A type is picked by
     * specifying one of the optional fields. Specifying more than one type
     * is an error.
     *
     * NOTE: This API is unstable and the related feature is experimental.
     */
    class CheckInfo {

        /**
         * Constructs a new CheckInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ICheckInfo);

        /** CheckInfo type. */
        public type: mesos.CheckInfo.Type;

        /** CheckInfo command. */
        public command?: (mesos.CheckInfo.ICommand|null);

        /** CheckInfo http. */
        public http?: (mesos.CheckInfo.IHttp|null);

        /** CheckInfo delaySeconds. */
        public delaySeconds: number;

        /** CheckInfo intervalSeconds. */
        public intervalSeconds: number;

        /** CheckInfo timeoutSeconds. */
        public timeoutSeconds: number;

        /**
         * Creates a new CheckInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckInfo instance
         */
        public static create(properties?: mesos.ICheckInfo): mesos.CheckInfo;

        /**
         * Encodes the specified CheckInfo message. Does not implicitly {@link mesos.CheckInfo.verify|verify} messages.
         * @param message CheckInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ICheckInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckInfo message, length delimited. Does not implicitly {@link mesos.CheckInfo.verify|verify} messages.
         * @param message CheckInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ICheckInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CheckInfo;

        /**
         * Decodes a CheckInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CheckInfo;

        /**
         * Verifies a CheckInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.CheckInfo;

        /**
         * Creates a plain object from a CheckInfo message. Also converts values to other types if specified.
         * @param message CheckInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.CheckInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CheckInfo {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            COMMAND = 1,
            HTTP = 2
        }

        /** Properties of a Command. */
        interface ICommand {

            /** Command command */
            command: mesos.ICommandInfo;
        }

        /** Represents a Command. */
        class Command {

            /**
             * Constructs a new Command.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.CheckInfo.ICommand);

            /** Command command. */
            public command: mesos.ICommandInfo;

            /**
             * Creates a new Command instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Command instance
             */
            public static create(properties?: mesos.CheckInfo.ICommand): mesos.CheckInfo.Command;

            /**
             * Encodes the specified Command message. Does not implicitly {@link mesos.CheckInfo.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.CheckInfo.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link mesos.CheckInfo.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.CheckInfo.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Command message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CheckInfo.Command;

            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CheckInfo.Command;

            /**
             * Verifies a Command message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Command
             */
            public static fromObject(object: { [k: string]: any }): mesos.CheckInfo.Command;

            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @param message Command
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.CheckInfo.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Command to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http port */
            port: number;

            /** Http path */
            path?: string;
        }

        /** Represents a Http. */
        class Http {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.CheckInfo.IHttp);

            /** Http port. */
            public port: number;

            /** Http path. */
            public path: string;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: mesos.CheckInfo.IHttp): mesos.CheckInfo.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link mesos.CheckInfo.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.CheckInfo.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link mesos.CheckInfo.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.CheckInfo.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CheckInfo.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CheckInfo.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): mesos.CheckInfo.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.CheckInfo.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a HealthCheck. */
    interface IHealthCheck {

        /** HealthCheck delaySeconds */
        delaySeconds?: number;

        /** HealthCheck intervalSeconds */
        intervalSeconds?: number;

        /** HealthCheck timeoutSeconds */
        timeoutSeconds?: number;

        /** HealthCheck consecutiveFailures */
        consecutiveFailures?: number;

        /** HealthCheck gracePeriodSeconds */
        gracePeriodSeconds?: number;

        /** HealthCheck type */
        type?: mesos.HealthCheck.Type;

        /** HealthCheck command */
        command?: mesos.ICommandInfo;

        /** HealthCheck http */
        http?: mesos.HealthCheck.IHTTPCheckInfo;

        /** HealthCheck tcp */
        tcp?: mesos.HealthCheck.ITCPCheckInfo;
    }

    /**
     * Describes a health check for a task or executor (or any arbitrary
     * process/command). A type is picked by specifying one of the
     * optional fields. Specifying more than one type is an error.
     */
    class HealthCheck {

        /**
         * Constructs a new HealthCheck.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IHealthCheck);

        /** HealthCheck delaySeconds. */
        public delaySeconds: number;

        /** HealthCheck intervalSeconds. */
        public intervalSeconds: number;

        /** HealthCheck timeoutSeconds. */
        public timeoutSeconds: number;

        /** HealthCheck consecutiveFailures. */
        public consecutiveFailures: number;

        /** HealthCheck gracePeriodSeconds. */
        public gracePeriodSeconds: number;

        /** HealthCheck type. */
        public type: mesos.HealthCheck.Type;

        /** HealthCheck command. */
        public command?: (mesos.ICommandInfo|null);

        /** HealthCheck http. */
        public http?: (mesos.HealthCheck.IHTTPCheckInfo|null);

        /** HealthCheck tcp. */
        public tcp?: (mesos.HealthCheck.ITCPCheckInfo|null);

        /**
         * Creates a new HealthCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HealthCheck instance
         */
        public static create(properties?: mesos.IHealthCheck): mesos.HealthCheck;

        /**
         * Encodes the specified HealthCheck message. Does not implicitly {@link mesos.HealthCheck.verify|verify} messages.
         * @param message HealthCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IHealthCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HealthCheck message, length delimited. Does not implicitly {@link mesos.HealthCheck.verify|verify} messages.
         * @param message HealthCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IHealthCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HealthCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HealthCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.HealthCheck;

        /**
         * Decodes a HealthCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HealthCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.HealthCheck;

        /**
         * Verifies a HealthCheck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HealthCheck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HealthCheck
         */
        public static fromObject(object: { [k: string]: any }): mesos.HealthCheck;

        /**
         * Creates a plain object from a HealthCheck message. Also converts values to other types if specified.
         * @param message HealthCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.HealthCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HealthCheck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace HealthCheck {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            COMMAND = 1,
            HTTP = 2,
            TCP = 3
        }

        /** Properties of a HTTPCheckInfo. */
        interface IHTTPCheckInfo {

            /** HTTPCheckInfo scheme */
            scheme?: string;

            /** HTTPCheckInfo port */
            port: number;

            /** HTTPCheckInfo path */
            path?: string;

            /** HTTPCheckInfo statuses */
            statuses?: number[];
        }

        /** Represents a HTTPCheckInfo. */
        class HTTPCheckInfo {

            /**
             * Constructs a new HTTPCheckInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.HealthCheck.IHTTPCheckInfo);

            /** HTTPCheckInfo scheme. */
            public scheme: string;

            /** HTTPCheckInfo port. */
            public port: number;

            /** HTTPCheckInfo path. */
            public path: string;

            /** HTTPCheckInfo statuses. */
            public statuses: number[];

            /**
             * Creates a new HTTPCheckInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HTTPCheckInfo instance
             */
            public static create(properties?: mesos.HealthCheck.IHTTPCheckInfo): mesos.HealthCheck.HTTPCheckInfo;

            /**
             * Encodes the specified HTTPCheckInfo message. Does not implicitly {@link mesos.HealthCheck.HTTPCheckInfo.verify|verify} messages.
             * @param message HTTPCheckInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.HealthCheck.IHTTPCheckInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HTTPCheckInfo message, length delimited. Does not implicitly {@link mesos.HealthCheck.HTTPCheckInfo.verify|verify} messages.
             * @param message HTTPCheckInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.HealthCheck.IHTTPCheckInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HTTPCheckInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HTTPCheckInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.HealthCheck.HTTPCheckInfo;

            /**
             * Decodes a HTTPCheckInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HTTPCheckInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.HealthCheck.HTTPCheckInfo;

            /**
             * Verifies a HTTPCheckInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HTTPCheckInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HTTPCheckInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.HealthCheck.HTTPCheckInfo;

            /**
             * Creates a plain object from a HTTPCheckInfo message. Also converts values to other types if specified.
             * @param message HTTPCheckInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.HealthCheck.HTTPCheckInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HTTPCheckInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TCPCheckInfo. */
        interface ITCPCheckInfo {

            /** TCPCheckInfo port */
            port: number;
        }

        /** Represents a TCPCheckInfo. */
        class TCPCheckInfo {

            /**
             * Constructs a new TCPCheckInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.HealthCheck.ITCPCheckInfo);

            /** TCPCheckInfo port. */
            public port: number;

            /**
             * Creates a new TCPCheckInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TCPCheckInfo instance
             */
            public static create(properties?: mesos.HealthCheck.ITCPCheckInfo): mesos.HealthCheck.TCPCheckInfo;

            /**
             * Encodes the specified TCPCheckInfo message. Does not implicitly {@link mesos.HealthCheck.TCPCheckInfo.verify|verify} messages.
             * @param message TCPCheckInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.HealthCheck.ITCPCheckInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TCPCheckInfo message, length delimited. Does not implicitly {@link mesos.HealthCheck.TCPCheckInfo.verify|verify} messages.
             * @param message TCPCheckInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.HealthCheck.ITCPCheckInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TCPCheckInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TCPCheckInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.HealthCheck.TCPCheckInfo;

            /**
             * Decodes a TCPCheckInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TCPCheckInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.HealthCheck.TCPCheckInfo;

            /**
             * Verifies a TCPCheckInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TCPCheckInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TCPCheckInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.HealthCheck.TCPCheckInfo;

            /**
             * Creates a plain object from a TCPCheckInfo message. Also converts values to other types if specified.
             * @param message TCPCheckInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.HealthCheck.TCPCheckInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TCPCheckInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a KillPolicy. */
    interface IKillPolicy {

        /** KillPolicy gracePeriod */
        gracePeriod?: mesos.IDurationInfo;
    }

    /**
     * Describes a kill policy for a task. Currently does not express
     * different policies (e.g. hitting HTTP endpoints), only controls
     * how long to wait between graceful and forcible task kill:
     *
     * graceful kill --------------> forcible kill
     * grace_period
     *
     * Kill policies are best-effort, because machine failures / forcible
     * terminations may occur.
     *
     * NOTE: For executor-less command-based tasks, the kill is performed
     * via sending a signal to the task process: SIGTERM for the graceful
     * kill and SIGKILL for the forcible kill. For the docker executor-less
     * tasks the grace period is passed to 'docker stop --time'.
     */
    class KillPolicy {

        /**
         * Constructs a new KillPolicy.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IKillPolicy);

        /** KillPolicy gracePeriod. */
        public gracePeriod?: (mesos.IDurationInfo|null);

        /**
         * Creates a new KillPolicy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KillPolicy instance
         */
        public static create(properties?: mesos.IKillPolicy): mesos.KillPolicy;

        /**
         * Encodes the specified KillPolicy message. Does not implicitly {@link mesos.KillPolicy.verify|verify} messages.
         * @param message KillPolicy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IKillPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KillPolicy message, length delimited. Does not implicitly {@link mesos.KillPolicy.verify|verify} messages.
         * @param message KillPolicy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IKillPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KillPolicy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KillPolicy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.KillPolicy;

        /**
         * Decodes a KillPolicy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KillPolicy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.KillPolicy;

        /**
         * Verifies a KillPolicy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KillPolicy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KillPolicy
         */
        public static fromObject(object: { [k: string]: any }): mesos.KillPolicy;

        /**
         * Creates a plain object from a KillPolicy message. Also converts values to other types if specified.
         * @param message KillPolicy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.KillPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KillPolicy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommandInfo. */
    interface ICommandInfo {

        /** CommandInfo uris */
        uris?: mesos.CommandInfo.IURI[];

        /** CommandInfo environment */
        environment?: mesos.IEnvironment;

        /** CommandInfo shell */
        shell?: boolean;

        /** CommandInfo value */
        value?: string;

        /** CommandInfo arguments */
        "arguments"?: string[];

        /** CommandInfo user */
        user?: string;
    }

    /**
     * Describes a command, executed via: '/bin/sh -c value'. Any URIs specified
     * are fetched before executing the command.  If the executable field for an
     * uri is set, executable file permission is set on the downloaded file.
     * Otherwise, if the downloaded file has a recognized archive extension
     * (currently [compressed] tar and zip) it is extracted into the executor's
     * working directory. This extraction can be disabled by setting `extract` to
     * false. In addition, any environment variables are set before executing
     * the command (so they can be used to "parameterize" your command).
     */
    class CommandInfo {

        /**
         * Constructs a new CommandInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ICommandInfo);

        /** CommandInfo uris. */
        public uris: mesos.CommandInfo.IURI[];

        /** CommandInfo environment. */
        public environment?: (mesos.IEnvironment|null);

        /** CommandInfo shell. */
        public shell: boolean;

        /** CommandInfo value. */
        public value: string;

        /** CommandInfo arguments. */
        public arguments_: string[];

        /** CommandInfo user. */
        public user: string;

        /**
         * Creates a new CommandInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommandInfo instance
         */
        public static create(properties?: mesos.ICommandInfo): mesos.CommandInfo;

        /**
         * Encodes the specified CommandInfo message. Does not implicitly {@link mesos.CommandInfo.verify|verify} messages.
         * @param message CommandInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ICommandInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommandInfo message, length delimited. Does not implicitly {@link mesos.CommandInfo.verify|verify} messages.
         * @param message CommandInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ICommandInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommandInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommandInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CommandInfo;

        /**
         * Decodes a CommandInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommandInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CommandInfo;

        /**
         * Verifies a CommandInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommandInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommandInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.CommandInfo;

        /**
         * Creates a plain object from a CommandInfo message. Also converts values to other types if specified.
         * @param message CommandInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.CommandInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommandInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CommandInfo {

        /** Properties of a URI. */
        interface IURI {

            /** URI value */
            value: string;

            /** URI executable */
            executable?: boolean;

            /** URI extract */
            extract?: boolean;

            /** URI cache */
            cache?: boolean;

            /** URI outputFile */
            outputFile?: string;
        }

        /** Represents a URI. */
        class URI {

            /**
             * Constructs a new URI.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.CommandInfo.IURI);

            /** URI value. */
            public value: string;

            /** URI executable. */
            public executable: boolean;

            /** URI extract. */
            public extract: boolean;

            /** URI cache. */
            public cache: boolean;

            /** URI outputFile. */
            public outputFile: string;

            /**
             * Creates a new URI instance using the specified properties.
             * @param [properties] Properties to set
             * @returns URI instance
             */
            public static create(properties?: mesos.CommandInfo.IURI): mesos.CommandInfo.URI;

            /**
             * Encodes the specified URI message. Does not implicitly {@link mesos.CommandInfo.URI.verify|verify} messages.
             * @param message URI message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.CommandInfo.IURI, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified URI message, length delimited. Does not implicitly {@link mesos.CommandInfo.URI.verify|verify} messages.
             * @param message URI message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.CommandInfo.IURI, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a URI message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns URI
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CommandInfo.URI;

            /**
             * Decodes a URI message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns URI
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CommandInfo.URI;

            /**
             * Verifies a URI message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a URI message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns URI
             */
            public static fromObject(object: { [k: string]: any }): mesos.CommandInfo.URI;

            /**
             * Creates a plain object from a URI message. Also converts values to other types if specified.
             * @param message URI
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.CommandInfo.URI, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this URI to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an ExecutorInfo. */
    interface IExecutorInfo {

        /** ExecutorInfo type */
        type?: mesos.ExecutorInfo.Type;

        /** ExecutorInfo executorId */
        executorId: mesos.IExecutorID;

        /** ExecutorInfo frameworkId */
        frameworkId?: mesos.IFrameworkID;

        /** ExecutorInfo command */
        command?: mesos.ICommandInfo;

        /** ExecutorInfo container */
        container?: mesos.IContainerInfo;

        /** ExecutorInfo resources */
        resources?: mesos.IResource[];

        /** ExecutorInfo name */
        name?: string;

        /** ExecutorInfo source */
        source?: string;

        /** ExecutorInfo data */
        data?: Uint8Array;

        /** ExecutorInfo discovery */
        discovery?: mesos.IDiscoveryInfo;

        /** ExecutorInfo shutdownGracePeriod */
        shutdownGracePeriod?: mesos.IDurationInfo;

        /** ExecutorInfo labels */
        labels?: mesos.ILabels;
    }

    /** Describes information about an executor. */
    class ExecutorInfo {

        /**
         * Constructs a new ExecutorInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IExecutorInfo);

        /** ExecutorInfo type. */
        public type: mesos.ExecutorInfo.Type;

        /** ExecutorInfo executorId. */
        public executorId: mesos.IExecutorID;

        /** ExecutorInfo frameworkId. */
        public frameworkId?: (mesos.IFrameworkID|null);

        /** ExecutorInfo command. */
        public command?: (mesos.ICommandInfo|null);

        /** ExecutorInfo container. */
        public container?: (mesos.IContainerInfo|null);

        /** ExecutorInfo resources. */
        public resources: mesos.IResource[];

        /** ExecutorInfo name. */
        public name: string;

        /** ExecutorInfo source. */
        public source: string;

        /** ExecutorInfo data. */
        public data: Uint8Array;

        /** ExecutorInfo discovery. */
        public discovery?: (mesos.IDiscoveryInfo|null);

        /** ExecutorInfo shutdownGracePeriod. */
        public shutdownGracePeriod?: (mesos.IDurationInfo|null);

        /** ExecutorInfo labels. */
        public labels?: (mesos.ILabels|null);

        /**
         * Creates a new ExecutorInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExecutorInfo instance
         */
        public static create(properties?: mesos.IExecutorInfo): mesos.ExecutorInfo;

        /**
         * Encodes the specified ExecutorInfo message. Does not implicitly {@link mesos.ExecutorInfo.verify|verify} messages.
         * @param message ExecutorInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IExecutorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExecutorInfo message, length delimited. Does not implicitly {@link mesos.ExecutorInfo.verify|verify} messages.
         * @param message ExecutorInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IExecutorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExecutorInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExecutorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ExecutorInfo;

        /**
         * Decodes an ExecutorInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExecutorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ExecutorInfo;

        /**
         * Verifies an ExecutorInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExecutorInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExecutorInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.ExecutorInfo;

        /**
         * Creates a plain object from an ExecutorInfo message. Also converts values to other types if specified.
         * @param message ExecutorInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.ExecutorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExecutorInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ExecutorInfo {

        /** Type enum. */
        enum Type {
            UNKNOWN = 0,
            DEFAULT = 1,
            CUSTOM = 2
        }
    }

    /** Properties of a MasterInfo. */
    interface IMasterInfo {

        /** MasterInfo id */
        id: string;

        /** MasterInfo ip */
        ip: number;

        /** MasterInfo port */
        port: number;

        /** MasterInfo pid */
        pid?: string;

        /** MasterInfo hostname */
        hostname?: string;

        /** MasterInfo version */
        version?: string;

        /** MasterInfo address */
        address?: mesos.IAddress;
    }

    /**
     * Describes a master. This will probably have more fields in the
     * future which might be used, for example, to link a framework webui
     * to a master webui.
     */
    class MasterInfo {

        /**
         * Constructs a new MasterInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IMasterInfo);

        /** MasterInfo id. */
        public id: string;

        /** MasterInfo ip. */
        public ip: number;

        /** MasterInfo port. */
        public port: number;

        /** MasterInfo pid. */
        public pid: string;

        /** MasterInfo hostname. */
        public hostname: string;

        /** MasterInfo version. */
        public version: string;

        /** MasterInfo address. */
        public address?: (mesos.IAddress|null);

        /**
         * Creates a new MasterInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MasterInfo instance
         */
        public static create(properties?: mesos.IMasterInfo): mesos.MasterInfo;

        /**
         * Encodes the specified MasterInfo message. Does not implicitly {@link mesos.MasterInfo.verify|verify} messages.
         * @param message MasterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MasterInfo message, length delimited. Does not implicitly {@link mesos.MasterInfo.verify|verify} messages.
         * @param message MasterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IMasterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MasterInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MasterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.MasterInfo;

        /**
         * Decodes a MasterInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MasterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.MasterInfo;

        /**
         * Verifies a MasterInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MasterInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MasterInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.MasterInfo;

        /**
         * Creates a plain object from a MasterInfo message. Also converts values to other types if specified.
         * @param message MasterInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.MasterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MasterInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AgentInfo. */
    interface IAgentInfo {

        /** AgentInfo hostname */
        hostname: string;

        /** AgentInfo port */
        port?: number;

        /** AgentInfo resources */
        resources?: mesos.IResource[];

        /** AgentInfo attributes */
        attributes?: mesos.IAttribute[];

        /** AgentInfo id */
        id?: mesos.IAgentID;
    }

    /**
     * Describes an agent. Note that the 'id' field is only available
     * after an agent is registered with the master, and is made available
     * here to facilitate re-registration.
     */
    class AgentInfo {

        /**
         * Constructs a new AgentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IAgentInfo);

        /** AgentInfo hostname. */
        public hostname: string;

        /** AgentInfo port. */
        public port: number;

        /** AgentInfo resources. */
        public resources: mesos.IResource[];

        /** AgentInfo attributes. */
        public attributes: mesos.IAttribute[];

        /** AgentInfo id. */
        public id?: (mesos.IAgentID|null);

        /**
         * Creates a new AgentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AgentInfo instance
         */
        public static create(properties?: mesos.IAgentInfo): mesos.AgentInfo;

        /**
         * Encodes the specified AgentInfo message. Does not implicitly {@link mesos.AgentInfo.verify|verify} messages.
         * @param message AgentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IAgentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgentInfo message, length delimited. Does not implicitly {@link mesos.AgentInfo.verify|verify} messages.
         * @param message AgentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IAgentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.AgentInfo;

        /**
         * Decodes an AgentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.AgentInfo;

        /**
         * Verifies an AgentInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AgentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AgentInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.AgentInfo;

        /**
         * Creates a plain object from an AgentInfo message. Also converts values to other types if specified.
         * @param message AgentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.AgentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AgentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace AgentInfo {

        /** Properties of a Capability. */
        interface ICapability {

            /** Capability type */
            type?: mesos.AgentInfo.Capability.Type;
        }

        /** Represents a Capability. */
        class Capability {

            /**
             * Constructs a new Capability.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.AgentInfo.ICapability);

            /** Capability type. */
            public type: mesos.AgentInfo.Capability.Type;

            /**
             * Creates a new Capability instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Capability instance
             */
            public static create(properties?: mesos.AgentInfo.ICapability): mesos.AgentInfo.Capability;

            /**
             * Encodes the specified Capability message. Does not implicitly {@link mesos.AgentInfo.Capability.verify|verify} messages.
             * @param message Capability message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.AgentInfo.ICapability, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Capability message, length delimited. Does not implicitly {@link mesos.AgentInfo.Capability.verify|verify} messages.
             * @param message Capability message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.AgentInfo.ICapability, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Capability message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Capability
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.AgentInfo.Capability;

            /**
             * Decodes a Capability message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Capability
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.AgentInfo.Capability;

            /**
             * Verifies a Capability message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Capability message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Capability
             */
            public static fromObject(object: { [k: string]: any }): mesos.AgentInfo.Capability;

            /**
             * Creates a plain object from a Capability message. Also converts values to other types if specified.
             * @param message Capability
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.AgentInfo.Capability, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Capability to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Capability {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                MULTI_ROLE = 1
            }
        }
    }

    /** Properties of a Value. */
    interface IValue {

        /** Value type */
        type: mesos.Value.Type;

        /** Value scalar */
        scalar?: mesos.Value.IScalar;

        /** Value ranges */
        ranges?: mesos.Value.IRanges;

        /** Value set */
        set?: mesos.Value.ISet;

        /** Value text */
        text?: mesos.Value.IText;
    }

    /**
     * Describes an Attribute or Resource "value". A value is described
     * using the standard protocol buffer "union" trick.
     */
    class Value {

        /**
         * Constructs a new Value.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IValue);

        /** Value type. */
        public type: mesos.Value.Type;

        /** Value scalar. */
        public scalar?: (mesos.Value.IScalar|null);

        /** Value ranges. */
        public ranges?: (mesos.Value.IRanges|null);

        /** Value set. */
        public set?: (mesos.Value.ISet|null);

        /** Value text. */
        public text?: (mesos.Value.IText|null);

        /**
         * Creates a new Value instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Value instance
         */
        public static create(properties?: mesos.IValue): mesos.Value;

        /**
         * Encodes the specified Value message. Does not implicitly {@link mesos.Value.verify|verify} messages.
         * @param message Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Value message, length delimited. Does not implicitly {@link mesos.Value.verify|verify} messages.
         * @param message Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Value message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Value;

        /**
         * Decodes a Value message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Value;

        /**
         * Verifies a Value message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Value message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Value
         */
        public static fromObject(object: { [k: string]: any }): mesos.Value;

        /**
         * Creates a plain object from a Value message. Also converts values to other types if specified.
         * @param message Value
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Value to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Value {

        /** Type enum. */
        enum Type {
            SCALAR = 0,
            RANGES = 1,
            SET = 2,
            TEXT = 3
        }

        /** Properties of a Scalar. */
        interface IScalar {

            /** Scalar value */
            value: number;
        }

        /** Represents a Scalar. */
        class Scalar {

            /**
             * Constructs a new Scalar.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Value.IScalar);

            /** Scalar value. */
            public value: number;

            /**
             * Creates a new Scalar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Scalar instance
             */
            public static create(properties?: mesos.Value.IScalar): mesos.Value.Scalar;

            /**
             * Encodes the specified Scalar message. Does not implicitly {@link mesos.Value.Scalar.verify|verify} messages.
             * @param message Scalar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Value.IScalar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Scalar message, length delimited. Does not implicitly {@link mesos.Value.Scalar.verify|verify} messages.
             * @param message Scalar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Value.IScalar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Scalar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Scalar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Value.Scalar;

            /**
             * Decodes a Scalar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Scalar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Value.Scalar;

            /**
             * Verifies a Scalar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Scalar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Scalar
             */
            public static fromObject(object: { [k: string]: any }): mesos.Value.Scalar;

            /**
             * Creates a plain object from a Scalar message. Also converts values to other types if specified.
             * @param message Scalar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Value.Scalar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Scalar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Range. */
        interface IRange {

            /** Range begin */
            begin: number;

            /** Range end */
            end: number;
        }

        /** Represents a Range. */
        class Range {

            /**
             * Constructs a new Range.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Value.IRange);

            /** Range begin. */
            public begin: number;

            /** Range end. */
            public end: number;

            /**
             * Creates a new Range instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Range instance
             */
            public static create(properties?: mesos.Value.IRange): mesos.Value.Range;

            /**
             * Encodes the specified Range message. Does not implicitly {@link mesos.Value.Range.verify|verify} messages.
             * @param message Range message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Value.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Range message, length delimited. Does not implicitly {@link mesos.Value.Range.verify|verify} messages.
             * @param message Range message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Value.IRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Range message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Value.Range;

            /**
             * Decodes a Range message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Range
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Value.Range;

            /**
             * Verifies a Range message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Range message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Range
             */
            public static fromObject(object: { [k: string]: any }): mesos.Value.Range;

            /**
             * Creates a plain object from a Range message. Also converts values to other types if specified.
             * @param message Range
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Value.Range, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Range to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Ranges. */
        interface IRanges {

            /** Ranges range */
            range?: mesos.Value.IRange[];
        }

        /** Represents a Ranges. */
        class Ranges {

            /**
             * Constructs a new Ranges.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Value.IRanges);

            /** Ranges range. */
            public range: mesos.Value.IRange[];

            /**
             * Creates a new Ranges instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Ranges instance
             */
            public static create(properties?: mesos.Value.IRanges): mesos.Value.Ranges;

            /**
             * Encodes the specified Ranges message. Does not implicitly {@link mesos.Value.Ranges.verify|verify} messages.
             * @param message Ranges message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Value.IRanges, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Ranges message, length delimited. Does not implicitly {@link mesos.Value.Ranges.verify|verify} messages.
             * @param message Ranges message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Value.IRanges, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Ranges message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Ranges
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Value.Ranges;

            /**
             * Decodes a Ranges message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Ranges
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Value.Ranges;

            /**
             * Verifies a Ranges message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Ranges message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Ranges
             */
            public static fromObject(object: { [k: string]: any }): mesos.Value.Ranges;

            /**
             * Creates a plain object from a Ranges message. Also converts values to other types if specified.
             * @param message Ranges
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Value.Ranges, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Ranges to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Set. */
        interface ISet {

            /** Set item */
            item?: string[];
        }

        /** Represents a Set. */
        class Set {

            /**
             * Constructs a new Set.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Value.ISet);

            /** Set item. */
            public item: string[];

            /**
             * Creates a new Set instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Set instance
             */
            public static create(properties?: mesos.Value.ISet): mesos.Value.Set;

            /**
             * Encodes the specified Set message. Does not implicitly {@link mesos.Value.Set.verify|verify} messages.
             * @param message Set message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Value.ISet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Set message, length delimited. Does not implicitly {@link mesos.Value.Set.verify|verify} messages.
             * @param message Set message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Value.ISet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Set message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Set
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Value.Set;

            /**
             * Decodes a Set message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Set
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Value.Set;

            /**
             * Verifies a Set message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Set message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Set
             */
            public static fromObject(object: { [k: string]: any }): mesos.Value.Set;

            /**
             * Creates a plain object from a Set message. Also converts values to other types if specified.
             * @param message Set
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Value.Set, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Set to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Text. */
        interface IText {

            /** Text value */
            value: string;
        }

        /** Represents a Text. */
        class Text {

            /**
             * Constructs a new Text.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Value.IText);

            /** Text value. */
            public value: string;

            /**
             * Creates a new Text instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Text instance
             */
            public static create(properties?: mesos.Value.IText): mesos.Value.Text;

            /**
             * Encodes the specified Text message. Does not implicitly {@link mesos.Value.Text.verify|verify} messages.
             * @param message Text message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Value.IText, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Text message, length delimited. Does not implicitly {@link mesos.Value.Text.verify|verify} messages.
             * @param message Text message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Value.IText, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Text message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Text
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Value.Text;

            /**
             * Decodes a Text message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Text
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Value.Text;

            /**
             * Verifies a Text message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Text message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Text
             */
            public static fromObject(object: { [k: string]: any }): mesos.Value.Text;

            /**
             * Creates a plain object from a Text message. Also converts values to other types if specified.
             * @param message Text
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Value.Text, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Text to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an Attribute. */
    interface IAttribute {

        /** Attribute name */
        name: string;

        /** Attribute type */
        type: mesos.Value.Type;

        /** Attribute scalar */
        scalar?: mesos.Value.IScalar;

        /** Attribute ranges */
        ranges?: mesos.Value.IRanges;

        /** Attribute set */
        set?: mesos.Value.ISet;

        /** Attribute text */
        text?: mesos.Value.IText;
    }

    /**
     * Describes an attribute that can be set on a machine. For now,
     * attributes and resources share the same "value" type, but this may
     * change in the future and attributes may only be string based.
     */
    class Attribute {

        /**
         * Constructs a new Attribute.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IAttribute);

        /** Attribute name. */
        public name: string;

        /** Attribute type. */
        public type: mesos.Value.Type;

        /** Attribute scalar. */
        public scalar?: (mesos.Value.IScalar|null);

        /** Attribute ranges. */
        public ranges?: (mesos.Value.IRanges|null);

        /** Attribute set. */
        public set?: (mesos.Value.ISet|null);

        /** Attribute text. */
        public text?: (mesos.Value.IText|null);

        /**
         * Creates a new Attribute instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attribute instance
         */
        public static create(properties?: mesos.IAttribute): mesos.Attribute;

        /**
         * Encodes the specified Attribute message. Does not implicitly {@link mesos.Attribute.verify|verify} messages.
         * @param message Attribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attribute message, length delimited. Does not implicitly {@link mesos.Attribute.verify|verify} messages.
         * @param message Attribute message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IAttribute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attribute message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Attribute;

        /**
         * Decodes an Attribute message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Attribute;

        /**
         * Verifies an Attribute message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attribute message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attribute
         */
        public static fromObject(object: { [k: string]: any }): mesos.Attribute;

        /**
         * Creates a plain object from an Attribute message. Also converts values to other types if specified.
         * @param message Attribute
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Attribute, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attribute to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Resource. */
    interface IResource {

        /** Resource name */
        name: string;

        /** Resource type */
        type: mesos.Value.Type;

        /** Resource scalar */
        scalar?: mesos.Value.IScalar;

        /** Resource ranges */
        ranges?: mesos.Value.IRanges;

        /** Resource set */
        set?: mesos.Value.ISet;

        /** Resource role */
        role?: string;

        /** Resource allocationInfo */
        allocationInfo?: mesos.Resource.IAllocationInfo;

        /** Resource reservation */
        reservation?: mesos.Resource.IReservationInfo;

        /** Resource disk */
        disk?: mesos.Resource.IDiskInfo;

        /** Resource revocable */
        revocable?: mesos.Resource.IRevocableInfo;

        /** Resource shared */
        shared?: mesos.Resource.ISharedInfo;
    }

    /**
     * Describes a resource on a machine. The `name` field is a string
     * like "cpus" or "mem" that indicates which kind of resource this is;
     * the rest of the fields describe the properties of the resource. A
     * resource can take on one of three types: scalar (double), a list of
     * finite and discrete ranges (e.g., [1-10, 20-30]), or a set of
     * items. A resource is described using the standard protocol buffer
     * "union" trick.
     *
     * Note that "disk" and "mem" resources are scalar values expressed in
     * megabytes. Fractional "cpus" values are allowed (e.g., "0.5"),
     * which correspond to partial shares of a CPU.
     */
    class Resource {

        /**
         * Constructs a new Resource.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IResource);

        /** Resource name. */
        public name: string;

        /** Resource type. */
        public type: mesos.Value.Type;

        /** Resource scalar. */
        public scalar?: (mesos.Value.IScalar|null);

        /** Resource ranges. */
        public ranges?: (mesos.Value.IRanges|null);

        /** Resource set. */
        public set?: (mesos.Value.ISet|null);

        /** Resource role. */
        public role: string;

        /** Resource allocationInfo. */
        public allocationInfo?: (mesos.Resource.IAllocationInfo|null);

        /** Resource reservation. */
        public reservation?: (mesos.Resource.IReservationInfo|null);

        /** Resource disk. */
        public disk?: (mesos.Resource.IDiskInfo|null);

        /** Resource revocable. */
        public revocable?: (mesos.Resource.IRevocableInfo|null);

        /** Resource shared. */
        public shared?: (mesos.Resource.ISharedInfo|null);

        /**
         * Creates a new Resource instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Resource instance
         */
        public static create(properties?: mesos.IResource): mesos.Resource;

        /**
         * Encodes the specified Resource message. Does not implicitly {@link mesos.Resource.verify|verify} messages.
         * @param message Resource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Resource message, length delimited. Does not implicitly {@link mesos.Resource.verify|verify} messages.
         * @param message Resource message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Resource message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource;

        /**
         * Decodes a Resource message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Resource
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource;

        /**
         * Verifies a Resource message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Resource message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Resource
         */
        public static fromObject(object: { [k: string]: any }): mesos.Resource;

        /**
         * Creates a plain object from a Resource message. Also converts values to other types if specified.
         * @param message Resource
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Resource to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Resource {

        /** Properties of an AllocationInfo. */
        interface IAllocationInfo {

            /** AllocationInfo role */
            role?: string;
        }

        /** Represents an AllocationInfo. */
        class AllocationInfo {

            /**
             * Constructs a new AllocationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Resource.IAllocationInfo);

            /** AllocationInfo role. */
            public role: string;

            /**
             * Creates a new AllocationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllocationInfo instance
             */
            public static create(properties?: mesos.Resource.IAllocationInfo): mesos.Resource.AllocationInfo;

            /**
             * Encodes the specified AllocationInfo message. Does not implicitly {@link mesos.Resource.AllocationInfo.verify|verify} messages.
             * @param message AllocationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Resource.IAllocationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllocationInfo message, length delimited. Does not implicitly {@link mesos.Resource.AllocationInfo.verify|verify} messages.
             * @param message AllocationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Resource.IAllocationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllocationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllocationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.AllocationInfo;

            /**
             * Decodes an AllocationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllocationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.AllocationInfo;

            /**
             * Verifies an AllocationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllocationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllocationInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.Resource.AllocationInfo;

            /**
             * Creates a plain object from an AllocationInfo message. Also converts values to other types if specified.
             * @param message AllocationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Resource.AllocationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllocationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReservationInfo. */
        interface IReservationInfo {

            /** ReservationInfo principal */
            principal?: string;

            /** ReservationInfo labels */
            labels?: mesos.ILabels;
        }

        /** Represents a ReservationInfo. */
        class ReservationInfo {

            /**
             * Constructs a new ReservationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Resource.IReservationInfo);

            /** ReservationInfo principal. */
            public principal: string;

            /** ReservationInfo labels. */
            public labels?: (mesos.ILabels|null);

            /**
             * Creates a new ReservationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReservationInfo instance
             */
            public static create(properties?: mesos.Resource.IReservationInfo): mesos.Resource.ReservationInfo;

            /**
             * Encodes the specified ReservationInfo message. Does not implicitly {@link mesos.Resource.ReservationInfo.verify|verify} messages.
             * @param message ReservationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Resource.IReservationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReservationInfo message, length delimited. Does not implicitly {@link mesos.Resource.ReservationInfo.verify|verify} messages.
             * @param message ReservationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Resource.IReservationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReservationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReservationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.ReservationInfo;

            /**
             * Decodes a ReservationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReservationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.ReservationInfo;

            /**
             * Verifies a ReservationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReservationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReservationInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.Resource.ReservationInfo;

            /**
             * Creates a plain object from a ReservationInfo message. Also converts values to other types if specified.
             * @param message ReservationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Resource.ReservationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReservationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DiskInfo. */
        interface IDiskInfo {

            /** DiskInfo persistence */
            persistence?: mesos.Resource.DiskInfo.IPersistence;

            /** DiskInfo volume */
            volume?: mesos.IVolume;

            /** DiskInfo source */
            source?: mesos.Resource.DiskInfo.ISource;
        }

        /** Represents a DiskInfo. */
        class DiskInfo {

            /**
             * Constructs a new DiskInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Resource.IDiskInfo);

            /** DiskInfo persistence. */
            public persistence?: (mesos.Resource.DiskInfo.IPersistence|null);

            /** DiskInfo volume. */
            public volume?: (mesos.IVolume|null);

            /** DiskInfo source. */
            public source?: (mesos.Resource.DiskInfo.ISource|null);

            /**
             * Creates a new DiskInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiskInfo instance
             */
            public static create(properties?: mesos.Resource.IDiskInfo): mesos.Resource.DiskInfo;

            /**
             * Encodes the specified DiskInfo message. Does not implicitly {@link mesos.Resource.DiskInfo.verify|verify} messages.
             * @param message DiskInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Resource.IDiskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiskInfo message, length delimited. Does not implicitly {@link mesos.Resource.DiskInfo.verify|verify} messages.
             * @param message DiskInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Resource.IDiskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiskInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiskInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.DiskInfo;

            /**
             * Decodes a DiskInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiskInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.DiskInfo;

            /**
             * Verifies a DiskInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiskInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiskInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.Resource.DiskInfo;

            /**
             * Creates a plain object from a DiskInfo message. Also converts values to other types if specified.
             * @param message DiskInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Resource.DiskInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiskInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DiskInfo {

            /** Properties of a Persistence. */
            interface IPersistence {

                /** Persistence id */
                id: string;

                /** Persistence principal */
                principal?: string;
            }

            /** Represents a Persistence. */
            class Persistence {

                /**
                 * Constructs a new Persistence.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Resource.DiskInfo.IPersistence);

                /** Persistence id. */
                public id: string;

                /** Persistence principal. */
                public principal: string;

                /**
                 * Creates a new Persistence instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Persistence instance
                 */
                public static create(properties?: mesos.Resource.DiskInfo.IPersistence): mesos.Resource.DiskInfo.Persistence;

                /**
                 * Encodes the specified Persistence message. Does not implicitly {@link mesos.Resource.DiskInfo.Persistence.verify|verify} messages.
                 * @param message Persistence message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Resource.DiskInfo.IPersistence, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Persistence message, length delimited. Does not implicitly {@link mesos.Resource.DiskInfo.Persistence.verify|verify} messages.
                 * @param message Persistence message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Resource.DiskInfo.IPersistence, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Persistence message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Persistence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.DiskInfo.Persistence;

                /**
                 * Decodes a Persistence message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Persistence
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.DiskInfo.Persistence;

                /**
                 * Verifies a Persistence message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Persistence message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Persistence
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Resource.DiskInfo.Persistence;

                /**
                 * Creates a plain object from a Persistence message. Also converts values to other types if specified.
                 * @param message Persistence
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Resource.DiskInfo.Persistence, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Persistence to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Source. */
            interface ISource {

                /** Source type */
                type: mesos.Resource.DiskInfo.Source.Type;

                /** Source path */
                path?: mesos.Resource.DiskInfo.Source.IPath;

                /** Source mount */
                mount?: mesos.Resource.DiskInfo.Source.IMount;
            }

            /** Represents a Source. */
            class Source {

                /**
                 * Constructs a new Source.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Resource.DiskInfo.ISource);

                /** Source type. */
                public type: mesos.Resource.DiskInfo.Source.Type;

                /** Source path. */
                public path?: (mesos.Resource.DiskInfo.Source.IPath|null);

                /** Source mount. */
                public mount?: (mesos.Resource.DiskInfo.Source.IMount|null);

                /**
                 * Creates a new Source instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Source instance
                 */
                public static create(properties?: mesos.Resource.DiskInfo.ISource): mesos.Resource.DiskInfo.Source;

                /**
                 * Encodes the specified Source message. Does not implicitly {@link mesos.Resource.DiskInfo.Source.verify|verify} messages.
                 * @param message Source message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Resource.DiskInfo.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Source message, length delimited. Does not implicitly {@link mesos.Resource.DiskInfo.Source.verify|verify} messages.
                 * @param message Source message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Resource.DiskInfo.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Source message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Source
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.DiskInfo.Source;

                /**
                 * Decodes a Source message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Source
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.DiskInfo.Source;

                /**
                 * Verifies a Source message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Source message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Source
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Resource.DiskInfo.Source;

                /**
                 * Creates a plain object from a Source message. Also converts values to other types if specified.
                 * @param message Source
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Resource.DiskInfo.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Source to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Source {

                /** Type enum. */
                enum Type {
                    PATH = 1,
                    MOUNT = 2
                }

                /** Properties of a Path. */
                interface IPath {

                    /** Path root */
                    root: string;
                }

                /** Represents a Path. */
                class Path {

                    /**
                     * Constructs a new Path.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: mesos.Resource.DiskInfo.Source.IPath);

                    /** Path root. */
                    public root: string;

                    /**
                     * Creates a new Path instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Path instance
                     */
                    public static create(properties?: mesos.Resource.DiskInfo.Source.IPath): mesos.Resource.DiskInfo.Source.Path;

                    /**
                     * Encodes the specified Path message. Does not implicitly {@link mesos.Resource.DiskInfo.Source.Path.verify|verify} messages.
                     * @param message Path message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: mesos.Resource.DiskInfo.Source.IPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Path message, length delimited. Does not implicitly {@link mesos.Resource.DiskInfo.Source.Path.verify|verify} messages.
                     * @param message Path message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: mesos.Resource.DiskInfo.Source.IPath, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Path message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Path
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.DiskInfo.Source.Path;

                    /**
                     * Decodes a Path message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Path
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.DiskInfo.Source.Path;

                    /**
                     * Verifies a Path message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Path message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Path
                     */
                    public static fromObject(object: { [k: string]: any }): mesos.Resource.DiskInfo.Source.Path;

                    /**
                     * Creates a plain object from a Path message. Also converts values to other types if specified.
                     * @param message Path
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: mesos.Resource.DiskInfo.Source.Path, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Path to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Mount. */
                interface IMount {

                    /** Mount root */
                    root: string;
                }

                /** Represents a Mount. */
                class Mount {

                    /**
                     * Constructs a new Mount.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: mesos.Resource.DiskInfo.Source.IMount);

                    /** Mount root. */
                    public root: string;

                    /**
                     * Creates a new Mount instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Mount instance
                     */
                    public static create(properties?: mesos.Resource.DiskInfo.Source.IMount): mesos.Resource.DiskInfo.Source.Mount;

                    /**
                     * Encodes the specified Mount message. Does not implicitly {@link mesos.Resource.DiskInfo.Source.Mount.verify|verify} messages.
                     * @param message Mount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: mesos.Resource.DiskInfo.Source.IMount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Mount message, length delimited. Does not implicitly {@link mesos.Resource.DiskInfo.Source.Mount.verify|verify} messages.
                     * @param message Mount message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: mesos.Resource.DiskInfo.Source.IMount, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Mount message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Mount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.DiskInfo.Source.Mount;

                    /**
                     * Decodes a Mount message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Mount
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.DiskInfo.Source.Mount;

                    /**
                     * Verifies a Mount message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Mount message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Mount
                     */
                    public static fromObject(object: { [k: string]: any }): mesos.Resource.DiskInfo.Source.Mount;

                    /**
                     * Creates a plain object from a Mount message. Also converts values to other types if specified.
                     * @param message Mount
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: mesos.Resource.DiskInfo.Source.Mount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Mount to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Properties of a RevocableInfo. */
        interface IRevocableInfo {
        }

        /** Represents a RevocableInfo. */
        class RevocableInfo {

            /**
             * Constructs a new RevocableInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Resource.IRevocableInfo);

            /**
             * Creates a new RevocableInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RevocableInfo instance
             */
            public static create(properties?: mesos.Resource.IRevocableInfo): mesos.Resource.RevocableInfo;

            /**
             * Encodes the specified RevocableInfo message. Does not implicitly {@link mesos.Resource.RevocableInfo.verify|verify} messages.
             * @param message RevocableInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Resource.IRevocableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RevocableInfo message, length delimited. Does not implicitly {@link mesos.Resource.RevocableInfo.verify|verify} messages.
             * @param message RevocableInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Resource.IRevocableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RevocableInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RevocableInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.RevocableInfo;

            /**
             * Decodes a RevocableInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RevocableInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.RevocableInfo;

            /**
             * Verifies a RevocableInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RevocableInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RevocableInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.Resource.RevocableInfo;

            /**
             * Creates a plain object from a RevocableInfo message. Also converts values to other types if specified.
             * @param message RevocableInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Resource.RevocableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RevocableInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SharedInfo. */
        interface ISharedInfo {
        }

        /** Represents a SharedInfo. */
        class SharedInfo {

            /**
             * Constructs a new SharedInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Resource.ISharedInfo);

            /**
             * Creates a new SharedInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SharedInfo instance
             */
            public static create(properties?: mesos.Resource.ISharedInfo): mesos.Resource.SharedInfo;

            /**
             * Encodes the specified SharedInfo message. Does not implicitly {@link mesos.Resource.SharedInfo.verify|verify} messages.
             * @param message SharedInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Resource.ISharedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SharedInfo message, length delimited. Does not implicitly {@link mesos.Resource.SharedInfo.verify|verify} messages.
             * @param message SharedInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Resource.ISharedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SharedInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SharedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Resource.SharedInfo;

            /**
             * Decodes a SharedInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SharedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Resource.SharedInfo;

            /**
             * Verifies a SharedInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SharedInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SharedInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.Resource.SharedInfo;

            /**
             * Creates a plain object from a SharedInfo message. Also converts values to other types if specified.
             * @param message SharedInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Resource.SharedInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SharedInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a TrafficControlStatistics. */
    interface ITrafficControlStatistics {

        /** TrafficControlStatistics id */
        id: string;

        /** TrafficControlStatistics backlog */
        backlog?: number;

        /** TrafficControlStatistics bytes */
        bytes?: number;

        /** TrafficControlStatistics drops */
        drops?: number;

        /** TrafficControlStatistics overlimits */
        overlimits?: number;

        /** TrafficControlStatistics packets */
        packets?: number;

        /** TrafficControlStatistics qlen */
        qlen?: number;

        /** TrafficControlStatistics ratebps */
        ratebps?: number;

        /** TrafficControlStatistics ratepps */
        ratepps?: number;

        /** TrafficControlStatistics requeues */
        requeues?: number;
    }

    /**
     * When the network bandwidth caps are enabled and the container
     * is over its limit, outbound packets may be either delayed or
     * dropped completely either because it exceeds the maximum bandwidth
     * allocation for a single container (the cap) or because the combined
     * network traffic of multiple containers on the host exceeds the
     * transmit capacity of the host (the share). We can report the
     * following statistics for each of these conditions exported directly
     * from the Linux Traffic Control Queueing Discipline.
     *
     * id         : name of the limiter, e.g. 'tx_bw_cap'
     * backlog    : number of packets currently delayed
     * bytes      : total bytes seen
     * drops      : number of packets dropped in total
     * overlimits : number of packets which exceeded allocation
     * packets    : total packets seen
     * qlen       : number of packets currently queued
     * rate_bps   : throughput in bytes/sec
     * rate_pps   : throughput in packets/sec
     * requeues   : number of times a packet has been delayed due to
     * locking or device contention issues
     *
     * More information on the operation of Linux Traffic Control can be
     * found at http://www.lartc.org/lartc.html.
     */
    class TrafficControlStatistics {

        /**
         * Constructs a new TrafficControlStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITrafficControlStatistics);

        /** TrafficControlStatistics id. */
        public id: string;

        /** TrafficControlStatistics backlog. */
        public backlog: number;

        /** TrafficControlStatistics bytes. */
        public bytes: number;

        /** TrafficControlStatistics drops. */
        public drops: number;

        /** TrafficControlStatistics overlimits. */
        public overlimits: number;

        /** TrafficControlStatistics packets. */
        public packets: number;

        /** TrafficControlStatistics qlen. */
        public qlen: number;

        /** TrafficControlStatistics ratebps. */
        public ratebps: number;

        /** TrafficControlStatistics ratepps. */
        public ratepps: number;

        /** TrafficControlStatistics requeues. */
        public requeues: number;

        /**
         * Creates a new TrafficControlStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TrafficControlStatistics instance
         */
        public static create(properties?: mesos.ITrafficControlStatistics): mesos.TrafficControlStatistics;

        /**
         * Encodes the specified TrafficControlStatistics message. Does not implicitly {@link mesos.TrafficControlStatistics.verify|verify} messages.
         * @param message TrafficControlStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITrafficControlStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TrafficControlStatistics message, length delimited. Does not implicitly {@link mesos.TrafficControlStatistics.verify|verify} messages.
         * @param message TrafficControlStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITrafficControlStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TrafficControlStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TrafficControlStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TrafficControlStatistics;

        /**
         * Decodes a TrafficControlStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TrafficControlStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TrafficControlStatistics;

        /**
         * Verifies a TrafficControlStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TrafficControlStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TrafficControlStatistics
         */
        public static fromObject(object: { [k: string]: any }): mesos.TrafficControlStatistics;

        /**
         * Creates a plain object from a TrafficControlStatistics message. Also converts values to other types if specified.
         * @param message TrafficControlStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.TrafficControlStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TrafficControlStatistics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IpStatistics. */
    interface IIpStatistics {

        /** IpStatistics Forwarding */
        Forwarding?: (number|Long);

        /** IpStatistics DefaultTTL */
        DefaultTTL?: (number|Long);

        /** IpStatistics InReceives */
        InReceives?: (number|Long);

        /** IpStatistics InHdrErrors */
        InHdrErrors?: (number|Long);

        /** IpStatistics InAddrErrors */
        InAddrErrors?: (number|Long);

        /** IpStatistics ForwDatagrams */
        ForwDatagrams?: (number|Long);

        /** IpStatistics InUnknownProtos */
        InUnknownProtos?: (number|Long);

        /** IpStatistics InDiscards */
        InDiscards?: (number|Long);

        /** IpStatistics InDelivers */
        InDelivers?: (number|Long);

        /** IpStatistics OutRequests */
        OutRequests?: (number|Long);

        /** IpStatistics OutDiscards */
        OutDiscards?: (number|Long);

        /** IpStatistics OutNoRoutes */
        OutNoRoutes?: (number|Long);

        /** IpStatistics ReasmTimeout */
        ReasmTimeout?: (number|Long);

        /** IpStatistics ReasmReqds */
        ReasmReqds?: (number|Long);

        /** IpStatistics ReasmOKs */
        ReasmOKs?: (number|Long);

        /** IpStatistics ReasmFails */
        ReasmFails?: (number|Long);

        /** IpStatistics FragOKs */
        FragOKs?: (number|Long);

        /** IpStatistics FragFails */
        FragFails?: (number|Long);

        /** IpStatistics FragCreates */
        FragCreates?: (number|Long);
    }

    /** Represents an IpStatistics. */
    class IpStatistics {

        /**
         * Constructs a new IpStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IIpStatistics);

        /** IpStatistics Forwarding. */
        public Forwarding: (number|Long);

        /** IpStatistics DefaultTTL. */
        public DefaultTTL: (number|Long);

        /** IpStatistics InReceives. */
        public InReceives: (number|Long);

        /** IpStatistics InHdrErrors. */
        public InHdrErrors: (number|Long);

        /** IpStatistics InAddrErrors. */
        public InAddrErrors: (number|Long);

        /** IpStatistics ForwDatagrams. */
        public ForwDatagrams: (number|Long);

        /** IpStatistics InUnknownProtos. */
        public InUnknownProtos: (number|Long);

        /** IpStatistics InDiscards. */
        public InDiscards: (number|Long);

        /** IpStatistics InDelivers. */
        public InDelivers: (number|Long);

        /** IpStatistics OutRequests. */
        public OutRequests: (number|Long);

        /** IpStatistics OutDiscards. */
        public OutDiscards: (number|Long);

        /** IpStatistics OutNoRoutes. */
        public OutNoRoutes: (number|Long);

        /** IpStatistics ReasmTimeout. */
        public ReasmTimeout: (number|Long);

        /** IpStatistics ReasmReqds. */
        public ReasmReqds: (number|Long);

        /** IpStatistics ReasmOKs. */
        public ReasmOKs: (number|Long);

        /** IpStatistics ReasmFails. */
        public ReasmFails: (number|Long);

        /** IpStatistics FragOKs. */
        public FragOKs: (number|Long);

        /** IpStatistics FragFails. */
        public FragFails: (number|Long);

        /** IpStatistics FragCreates. */
        public FragCreates: (number|Long);

        /**
         * Creates a new IpStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IpStatistics instance
         */
        public static create(properties?: mesos.IIpStatistics): mesos.IpStatistics;

        /**
         * Encodes the specified IpStatistics message. Does not implicitly {@link mesos.IpStatistics.verify|verify} messages.
         * @param message IpStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IIpStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IpStatistics message, length delimited. Does not implicitly {@link mesos.IpStatistics.verify|verify} messages.
         * @param message IpStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IIpStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IpStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IpStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.IpStatistics;

        /**
         * Decodes an IpStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IpStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.IpStatistics;

        /**
         * Verifies an IpStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IpStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IpStatistics
         */
        public static fromObject(object: { [k: string]: any }): mesos.IpStatistics;

        /**
         * Creates a plain object from an IpStatistics message. Also converts values to other types if specified.
         * @param message IpStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.IpStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IpStatistics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IcmpStatistics. */
    interface IIcmpStatistics {

        /** IcmpStatistics InMsgs */
        InMsgs?: (number|Long);

        /** IcmpStatistics InErrors */
        InErrors?: (number|Long);

        /** IcmpStatistics InCsumErrors */
        InCsumErrors?: (number|Long);

        /** IcmpStatistics InDestUnreachs */
        InDestUnreachs?: (number|Long);

        /** IcmpStatistics InTimeExcds */
        InTimeExcds?: (number|Long);

        /** IcmpStatistics InParmProbs */
        InParmProbs?: (number|Long);

        /** IcmpStatistics InSrcQuenchs */
        InSrcQuenchs?: (number|Long);

        /** IcmpStatistics InRedirects */
        InRedirects?: (number|Long);

        /** IcmpStatistics InEchos */
        InEchos?: (number|Long);

        /** IcmpStatistics InEchoReps */
        InEchoReps?: (number|Long);

        /** IcmpStatistics InTimestamps */
        InTimestamps?: (number|Long);

        /** IcmpStatistics InTimestampReps */
        InTimestampReps?: (number|Long);

        /** IcmpStatistics InAddrMasks */
        InAddrMasks?: (number|Long);

        /** IcmpStatistics InAddrMaskReps */
        InAddrMaskReps?: (number|Long);

        /** IcmpStatistics OutMsgs */
        OutMsgs?: (number|Long);

        /** IcmpStatistics OutErrors */
        OutErrors?: (number|Long);

        /** IcmpStatistics OutDestUnreachs */
        OutDestUnreachs?: (number|Long);

        /** IcmpStatistics OutTimeExcds */
        OutTimeExcds?: (number|Long);

        /** IcmpStatistics OutParmProbs */
        OutParmProbs?: (number|Long);

        /** IcmpStatistics OutSrcQuenchs */
        OutSrcQuenchs?: (number|Long);

        /** IcmpStatistics OutRedirects */
        OutRedirects?: (number|Long);

        /** IcmpStatistics OutEchos */
        OutEchos?: (number|Long);

        /** IcmpStatistics OutEchoReps */
        OutEchoReps?: (number|Long);

        /** IcmpStatistics OutTimestamps */
        OutTimestamps?: (number|Long);

        /** IcmpStatistics OutTimestampReps */
        OutTimestampReps?: (number|Long);

        /** IcmpStatistics OutAddrMasks */
        OutAddrMasks?: (number|Long);

        /** IcmpStatistics OutAddrMaskReps */
        OutAddrMaskReps?: (number|Long);
    }

    /** Represents an IcmpStatistics. */
    class IcmpStatistics {

        /**
         * Constructs a new IcmpStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IIcmpStatistics);

        /** IcmpStatistics InMsgs. */
        public InMsgs: (number|Long);

        /** IcmpStatistics InErrors. */
        public InErrors: (number|Long);

        /** IcmpStatistics InCsumErrors. */
        public InCsumErrors: (number|Long);

        /** IcmpStatistics InDestUnreachs. */
        public InDestUnreachs: (number|Long);

        /** IcmpStatistics InTimeExcds. */
        public InTimeExcds: (number|Long);

        /** IcmpStatistics InParmProbs. */
        public InParmProbs: (number|Long);

        /** IcmpStatistics InSrcQuenchs. */
        public InSrcQuenchs: (number|Long);

        /** IcmpStatistics InRedirects. */
        public InRedirects: (number|Long);

        /** IcmpStatistics InEchos. */
        public InEchos: (number|Long);

        /** IcmpStatistics InEchoReps. */
        public InEchoReps: (number|Long);

        /** IcmpStatistics InTimestamps. */
        public InTimestamps: (number|Long);

        /** IcmpStatistics InTimestampReps. */
        public InTimestampReps: (number|Long);

        /** IcmpStatistics InAddrMasks. */
        public InAddrMasks: (number|Long);

        /** IcmpStatistics InAddrMaskReps. */
        public InAddrMaskReps: (number|Long);

        /** IcmpStatistics OutMsgs. */
        public OutMsgs: (number|Long);

        /** IcmpStatistics OutErrors. */
        public OutErrors: (number|Long);

        /** IcmpStatistics OutDestUnreachs. */
        public OutDestUnreachs: (number|Long);

        /** IcmpStatistics OutTimeExcds. */
        public OutTimeExcds: (number|Long);

        /** IcmpStatistics OutParmProbs. */
        public OutParmProbs: (number|Long);

        /** IcmpStatistics OutSrcQuenchs. */
        public OutSrcQuenchs: (number|Long);

        /** IcmpStatistics OutRedirects. */
        public OutRedirects: (number|Long);

        /** IcmpStatistics OutEchos. */
        public OutEchos: (number|Long);

        /** IcmpStatistics OutEchoReps. */
        public OutEchoReps: (number|Long);

        /** IcmpStatistics OutTimestamps. */
        public OutTimestamps: (number|Long);

        /** IcmpStatistics OutTimestampReps. */
        public OutTimestampReps: (number|Long);

        /** IcmpStatistics OutAddrMasks. */
        public OutAddrMasks: (number|Long);

        /** IcmpStatistics OutAddrMaskReps. */
        public OutAddrMaskReps: (number|Long);

        /**
         * Creates a new IcmpStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IcmpStatistics instance
         */
        public static create(properties?: mesos.IIcmpStatistics): mesos.IcmpStatistics;

        /**
         * Encodes the specified IcmpStatistics message. Does not implicitly {@link mesos.IcmpStatistics.verify|verify} messages.
         * @param message IcmpStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IIcmpStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IcmpStatistics message, length delimited. Does not implicitly {@link mesos.IcmpStatistics.verify|verify} messages.
         * @param message IcmpStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IIcmpStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IcmpStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IcmpStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.IcmpStatistics;

        /**
         * Decodes an IcmpStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IcmpStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.IcmpStatistics;

        /**
         * Verifies an IcmpStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IcmpStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IcmpStatistics
         */
        public static fromObject(object: { [k: string]: any }): mesos.IcmpStatistics;

        /**
         * Creates a plain object from an IcmpStatistics message. Also converts values to other types if specified.
         * @param message IcmpStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.IcmpStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IcmpStatistics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TcpStatistics. */
    interface ITcpStatistics {

        /** TcpStatistics RtoAlgorithm */
        RtoAlgorithm?: (number|Long);

        /** TcpStatistics RtoMin */
        RtoMin?: (number|Long);

        /** TcpStatistics RtoMax */
        RtoMax?: (number|Long);

        /** TcpStatistics MaxConn */
        MaxConn?: (number|Long);

        /** TcpStatistics ActiveOpens */
        ActiveOpens?: (number|Long);

        /** TcpStatistics PassiveOpens */
        PassiveOpens?: (number|Long);

        /** TcpStatistics AttemptFails */
        AttemptFails?: (number|Long);

        /** TcpStatistics EstabResets */
        EstabResets?: (number|Long);

        /** TcpStatistics CurrEstab */
        CurrEstab?: (number|Long);

        /** TcpStatistics InSegs */
        InSegs?: (number|Long);

        /** TcpStatistics OutSegs */
        OutSegs?: (number|Long);

        /** TcpStatistics RetransSegs */
        RetransSegs?: (number|Long);

        /** TcpStatistics InErrs */
        InErrs?: (number|Long);

        /** TcpStatistics OutRsts */
        OutRsts?: (number|Long);

        /** TcpStatistics InCsumErrors */
        InCsumErrors?: (number|Long);
    }

    /** Represents a TcpStatistics. */
    class TcpStatistics {

        /**
         * Constructs a new TcpStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITcpStatistics);

        /** TcpStatistics RtoAlgorithm. */
        public RtoAlgorithm: (number|Long);

        /** TcpStatistics RtoMin. */
        public RtoMin: (number|Long);

        /** TcpStatistics RtoMax. */
        public RtoMax: (number|Long);

        /** TcpStatistics MaxConn. */
        public MaxConn: (number|Long);

        /** TcpStatistics ActiveOpens. */
        public ActiveOpens: (number|Long);

        /** TcpStatistics PassiveOpens. */
        public PassiveOpens: (number|Long);

        /** TcpStatistics AttemptFails. */
        public AttemptFails: (number|Long);

        /** TcpStatistics EstabResets. */
        public EstabResets: (number|Long);

        /** TcpStatistics CurrEstab. */
        public CurrEstab: (number|Long);

        /** TcpStatistics InSegs. */
        public InSegs: (number|Long);

        /** TcpStatistics OutSegs. */
        public OutSegs: (number|Long);

        /** TcpStatistics RetransSegs. */
        public RetransSegs: (number|Long);

        /** TcpStatistics InErrs. */
        public InErrs: (number|Long);

        /** TcpStatistics OutRsts. */
        public OutRsts: (number|Long);

        /** TcpStatistics InCsumErrors. */
        public InCsumErrors: (number|Long);

        /**
         * Creates a new TcpStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TcpStatistics instance
         */
        public static create(properties?: mesos.ITcpStatistics): mesos.TcpStatistics;

        /**
         * Encodes the specified TcpStatistics message. Does not implicitly {@link mesos.TcpStatistics.verify|verify} messages.
         * @param message TcpStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITcpStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TcpStatistics message, length delimited. Does not implicitly {@link mesos.TcpStatistics.verify|verify} messages.
         * @param message TcpStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITcpStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TcpStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TcpStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TcpStatistics;

        /**
         * Decodes a TcpStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TcpStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TcpStatistics;

        /**
         * Verifies a TcpStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TcpStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TcpStatistics
         */
        public static fromObject(object: { [k: string]: any }): mesos.TcpStatistics;

        /**
         * Creates a plain object from a TcpStatistics message. Also converts values to other types if specified.
         * @param message TcpStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.TcpStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TcpStatistics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UdpStatistics. */
    interface IUdpStatistics {

        /** UdpStatistics InDatagrams */
        InDatagrams?: (number|Long);

        /** UdpStatistics NoPorts */
        NoPorts?: (number|Long);

        /** UdpStatistics InErrors */
        InErrors?: (number|Long);

        /** UdpStatistics OutDatagrams */
        OutDatagrams?: (number|Long);

        /** UdpStatistics RcvbufErrors */
        RcvbufErrors?: (number|Long);

        /** UdpStatistics SndbufErrors */
        SndbufErrors?: (number|Long);

        /** UdpStatistics InCsumErrors */
        InCsumErrors?: (number|Long);

        /** UdpStatistics IgnoredMulti */
        IgnoredMulti?: (number|Long);
    }

    /** Represents an UdpStatistics. */
    class UdpStatistics {

        /**
         * Constructs a new UdpStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IUdpStatistics);

        /** UdpStatistics InDatagrams. */
        public InDatagrams: (number|Long);

        /** UdpStatistics NoPorts. */
        public NoPorts: (number|Long);

        /** UdpStatistics InErrors. */
        public InErrors: (number|Long);

        /** UdpStatistics OutDatagrams. */
        public OutDatagrams: (number|Long);

        /** UdpStatistics RcvbufErrors. */
        public RcvbufErrors: (number|Long);

        /** UdpStatistics SndbufErrors. */
        public SndbufErrors: (number|Long);

        /** UdpStatistics InCsumErrors. */
        public InCsumErrors: (number|Long);

        /** UdpStatistics IgnoredMulti. */
        public IgnoredMulti: (number|Long);

        /**
         * Creates a new UdpStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UdpStatistics instance
         */
        public static create(properties?: mesos.IUdpStatistics): mesos.UdpStatistics;

        /**
         * Encodes the specified UdpStatistics message. Does not implicitly {@link mesos.UdpStatistics.verify|verify} messages.
         * @param message UdpStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IUdpStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UdpStatistics message, length delimited. Does not implicitly {@link mesos.UdpStatistics.verify|verify} messages.
         * @param message UdpStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IUdpStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UdpStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UdpStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.UdpStatistics;

        /**
         * Decodes an UdpStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UdpStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.UdpStatistics;

        /**
         * Verifies an UdpStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UdpStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UdpStatistics
         */
        public static fromObject(object: { [k: string]: any }): mesos.UdpStatistics;

        /**
         * Creates a plain object from an UdpStatistics message. Also converts values to other types if specified.
         * @param message UdpStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.UdpStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UdpStatistics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SNMPStatistics. */
    interface ISNMPStatistics {

        /** SNMPStatistics ipStats */
        ipStats?: mesos.IIpStatistics;

        /** SNMPStatistics icmpStats */
        icmpStats?: mesos.IIcmpStatistics;

        /** SNMPStatistics tcpStats */
        tcpStats?: mesos.ITcpStatistics;

        /** SNMPStatistics udpStats */
        udpStats?: mesos.IUdpStatistics;
    }

    /** Represents a SNMPStatistics. */
    class SNMPStatistics {

        /**
         * Constructs a new SNMPStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ISNMPStatistics);

        /** SNMPStatistics ipStats. */
        public ipStats?: (mesos.IIpStatistics|null);

        /** SNMPStatistics icmpStats. */
        public icmpStats?: (mesos.IIcmpStatistics|null);

        /** SNMPStatistics tcpStats. */
        public tcpStats?: (mesos.ITcpStatistics|null);

        /** SNMPStatistics udpStats. */
        public udpStats?: (mesos.IUdpStatistics|null);

        /**
         * Creates a new SNMPStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SNMPStatistics instance
         */
        public static create(properties?: mesos.ISNMPStatistics): mesos.SNMPStatistics;

        /**
         * Encodes the specified SNMPStatistics message. Does not implicitly {@link mesos.SNMPStatistics.verify|verify} messages.
         * @param message SNMPStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ISNMPStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SNMPStatistics message, length delimited. Does not implicitly {@link mesos.SNMPStatistics.verify|verify} messages.
         * @param message SNMPStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ISNMPStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SNMPStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SNMPStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.SNMPStatistics;

        /**
         * Decodes a SNMPStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SNMPStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.SNMPStatistics;

        /**
         * Verifies a SNMPStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SNMPStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SNMPStatistics
         */
        public static fromObject(object: { [k: string]: any }): mesos.SNMPStatistics;

        /**
         * Creates a plain object from a SNMPStatistics message. Also converts values to other types if specified.
         * @param message SNMPStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.SNMPStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SNMPStatistics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResourceStatistics. */
    interface IResourceStatistics {

        /** ResourceStatistics timestamp */
        timestamp: number;

        /** ResourceStatistics processes */
        processes?: number;

        /** ResourceStatistics threads */
        threads?: number;

        /** ResourceStatistics cpusUserTimeSecs */
        cpusUserTimeSecs?: number;

        /** ResourceStatistics cpusSystemTimeSecs */
        cpusSystemTimeSecs?: number;

        /** ResourceStatistics cpusLimit */
        cpusLimit?: number;

        /** ResourceStatistics cpusNrPeriods */
        cpusNrPeriods?: number;

        /** ResourceStatistics cpusNrThrottled */
        cpusNrThrottled?: number;

        /** ResourceStatistics cpusThrottledTimeSecs */
        cpusThrottledTimeSecs?: number;

        /** ResourceStatistics memTotalBytes */
        memTotalBytes?: number;

        /** ResourceStatistics memTotalMemswBytes */
        memTotalMemswBytes?: number;

        /** ResourceStatistics memLimitBytes */
        memLimitBytes?: number;

        /** ResourceStatistics memSoftLimitBytes */
        memSoftLimitBytes?: number;

        /** ResourceStatistics memFileBytes */
        memFileBytes?: number;

        /** ResourceStatistics memAnonBytes */
        memAnonBytes?: number;

        /** ResourceStatistics memCacheBytes */
        memCacheBytes?: number;

        /** ResourceStatistics memRssBytes */
        memRssBytes?: number;

        /** ResourceStatistics memMappedFileBytes */
        memMappedFileBytes?: number;

        /** ResourceStatistics memSwapBytes */
        memSwapBytes?: number;

        /** ResourceStatistics memUnevictableBytes */
        memUnevictableBytes?: number;

        /** ResourceStatistics memLowPressureCounter */
        memLowPressureCounter?: number;

        /** ResourceStatistics memMediumPressureCounter */
        memMediumPressureCounter?: number;

        /** ResourceStatistics memCriticalPressureCounter */
        memCriticalPressureCounter?: number;

        /** ResourceStatistics diskLimitBytes */
        diskLimitBytes?: number;

        /** ResourceStatistics diskUsedBytes */
        diskUsedBytes?: number;

        /** ResourceStatistics perf */
        perf?: mesos.IPerfStatistics;

        /** ResourceStatistics netRxPackets */
        netRxPackets?: number;

        /** ResourceStatistics netRxBytes */
        netRxBytes?: number;

        /** ResourceStatistics netRxErrors */
        netRxErrors?: number;

        /** ResourceStatistics netRxDropped */
        netRxDropped?: number;

        /** ResourceStatistics netTxPackets */
        netTxPackets?: number;

        /** ResourceStatistics netTxBytes */
        netTxBytes?: number;

        /** ResourceStatistics netTxErrors */
        netTxErrors?: number;

        /** ResourceStatistics netTxDropped */
        netTxDropped?: number;

        /** ResourceStatistics netTcpRttMicrosecsP50 */
        netTcpRttMicrosecsP50?: number;

        /** ResourceStatistics netTcpRttMicrosecsP90 */
        netTcpRttMicrosecsP90?: number;

        /** ResourceStatistics netTcpRttMicrosecsP95 */
        netTcpRttMicrosecsP95?: number;

        /** ResourceStatistics netTcpRttMicrosecsP99 */
        netTcpRttMicrosecsP99?: number;

        /** ResourceStatistics netTcpActiveConnections */
        netTcpActiveConnections?: number;

        /** ResourceStatistics netTcpTimeWaitConnections */
        netTcpTimeWaitConnections?: number;

        /** ResourceStatistics netTrafficControlStatistics */
        netTrafficControlStatistics?: mesos.ITrafficControlStatistics[];

        /** ResourceStatistics netSnmpStatistics */
        netSnmpStatistics?: mesos.ISNMPStatistics;
    }

    /** A snapshot of resource usage statistics. */
    class ResourceStatistics {

        /**
         * Constructs a new ResourceStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IResourceStatistics);

        /** ResourceStatistics timestamp. */
        public timestamp: number;

        /** ResourceStatistics processes. */
        public processes: number;

        /** ResourceStatistics threads. */
        public threads: number;

        /** ResourceStatistics cpusUserTimeSecs. */
        public cpusUserTimeSecs: number;

        /** ResourceStatistics cpusSystemTimeSecs. */
        public cpusSystemTimeSecs: number;

        /** ResourceStatistics cpusLimit. */
        public cpusLimit: number;

        /** ResourceStatistics cpusNrPeriods. */
        public cpusNrPeriods: number;

        /** ResourceStatistics cpusNrThrottled. */
        public cpusNrThrottled: number;

        /** ResourceStatistics cpusThrottledTimeSecs. */
        public cpusThrottledTimeSecs: number;

        /** ResourceStatistics memTotalBytes. */
        public memTotalBytes: number;

        /** ResourceStatistics memTotalMemswBytes. */
        public memTotalMemswBytes: number;

        /** ResourceStatistics memLimitBytes. */
        public memLimitBytes: number;

        /** ResourceStatistics memSoftLimitBytes. */
        public memSoftLimitBytes: number;

        /** ResourceStatistics memFileBytes. */
        public memFileBytes: number;

        /** ResourceStatistics memAnonBytes. */
        public memAnonBytes: number;

        /** ResourceStatistics memCacheBytes. */
        public memCacheBytes: number;

        /** ResourceStatistics memRssBytes. */
        public memRssBytes: number;

        /** ResourceStatistics memMappedFileBytes. */
        public memMappedFileBytes: number;

        /** ResourceStatistics memSwapBytes. */
        public memSwapBytes: number;

        /** ResourceStatistics memUnevictableBytes. */
        public memUnevictableBytes: number;

        /** ResourceStatistics memLowPressureCounter. */
        public memLowPressureCounter: number;

        /** ResourceStatistics memMediumPressureCounter. */
        public memMediumPressureCounter: number;

        /** ResourceStatistics memCriticalPressureCounter. */
        public memCriticalPressureCounter: number;

        /** ResourceStatistics diskLimitBytes. */
        public diskLimitBytes: number;

        /** ResourceStatistics diskUsedBytes. */
        public diskUsedBytes: number;

        /** ResourceStatistics perf. */
        public perf?: (mesos.IPerfStatistics|null);

        /** ResourceStatistics netRxPackets. */
        public netRxPackets: number;

        /** ResourceStatistics netRxBytes. */
        public netRxBytes: number;

        /** ResourceStatistics netRxErrors. */
        public netRxErrors: number;

        /** ResourceStatistics netRxDropped. */
        public netRxDropped: number;

        /** ResourceStatistics netTxPackets. */
        public netTxPackets: number;

        /** ResourceStatistics netTxBytes. */
        public netTxBytes: number;

        /** ResourceStatistics netTxErrors. */
        public netTxErrors: number;

        /** ResourceStatistics netTxDropped. */
        public netTxDropped: number;

        /** ResourceStatistics netTcpRttMicrosecsP50. */
        public netTcpRttMicrosecsP50: number;

        /** ResourceStatistics netTcpRttMicrosecsP90. */
        public netTcpRttMicrosecsP90: number;

        /** ResourceStatistics netTcpRttMicrosecsP95. */
        public netTcpRttMicrosecsP95: number;

        /** ResourceStatistics netTcpRttMicrosecsP99. */
        public netTcpRttMicrosecsP99: number;

        /** ResourceStatistics netTcpActiveConnections. */
        public netTcpActiveConnections: number;

        /** ResourceStatistics netTcpTimeWaitConnections. */
        public netTcpTimeWaitConnections: number;

        /** ResourceStatistics netTrafficControlStatistics. */
        public netTrafficControlStatistics: mesos.ITrafficControlStatistics[];

        /** ResourceStatistics netSnmpStatistics. */
        public netSnmpStatistics?: (mesos.ISNMPStatistics|null);

        /**
         * Creates a new ResourceStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResourceStatistics instance
         */
        public static create(properties?: mesos.IResourceStatistics): mesos.ResourceStatistics;

        /**
         * Encodes the specified ResourceStatistics message. Does not implicitly {@link mesos.ResourceStatistics.verify|verify} messages.
         * @param message ResourceStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IResourceStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResourceStatistics message, length delimited. Does not implicitly {@link mesos.ResourceStatistics.verify|verify} messages.
         * @param message ResourceStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IResourceStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResourceStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResourceStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ResourceStatistics;

        /**
         * Decodes a ResourceStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResourceStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ResourceStatistics;

        /**
         * Verifies a ResourceStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResourceStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResourceStatistics
         */
        public static fromObject(object: { [k: string]: any }): mesos.ResourceStatistics;

        /**
         * Creates a plain object from a ResourceStatistics message. Also converts values to other types if specified.
         * @param message ResourceStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.ResourceStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResourceStatistics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResourceUsage. */
    interface IResourceUsage {

        /** ResourceUsage executors */
        executors?: mesos.ResourceUsage.IExecutor[];

        /** ResourceUsage total */
        total?: mesos.IResource[];
    }

    /** Describes a snapshot of the resource usage for executors. */
    class ResourceUsage {

        /**
         * Constructs a new ResourceUsage.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IResourceUsage);

        /** ResourceUsage executors. */
        public executors: mesos.ResourceUsage.IExecutor[];

        /** ResourceUsage total. */
        public total: mesos.IResource[];

        /**
         * Creates a new ResourceUsage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResourceUsage instance
         */
        public static create(properties?: mesos.IResourceUsage): mesos.ResourceUsage;

        /**
         * Encodes the specified ResourceUsage message. Does not implicitly {@link mesos.ResourceUsage.verify|verify} messages.
         * @param message ResourceUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IResourceUsage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResourceUsage message, length delimited. Does not implicitly {@link mesos.ResourceUsage.verify|verify} messages.
         * @param message ResourceUsage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IResourceUsage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResourceUsage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResourceUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ResourceUsage;

        /**
         * Decodes a ResourceUsage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResourceUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ResourceUsage;

        /**
         * Verifies a ResourceUsage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResourceUsage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResourceUsage
         */
        public static fromObject(object: { [k: string]: any }): mesos.ResourceUsage;

        /**
         * Creates a plain object from a ResourceUsage message. Also converts values to other types if specified.
         * @param message ResourceUsage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.ResourceUsage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResourceUsage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ResourceUsage {

        /** Properties of an Executor. */
        interface IExecutor {

            /** Executor executorInfo */
            executorInfo: mesos.IExecutorInfo;

            /** Executor allocated */
            allocated?: mesos.IResource[];

            /** Executor statistics */
            statistics?: mesos.IResourceStatistics;

            /** Executor containerId */
            containerId: mesos.IContainerID;

            /** Executor tasks */
            tasks?: mesos.ResourceUsage.Executor.ITask[];
        }

        /** Represents an Executor. */
        class Executor {

            /**
             * Constructs a new Executor.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.ResourceUsage.IExecutor);

            /** Executor executorInfo. */
            public executorInfo: mesos.IExecutorInfo;

            /** Executor allocated. */
            public allocated: mesos.IResource[];

            /** Executor statistics. */
            public statistics?: (mesos.IResourceStatistics|null);

            /** Executor containerId. */
            public containerId: mesos.IContainerID;

            /** Executor tasks. */
            public tasks: mesos.ResourceUsage.Executor.ITask[];

            /**
             * Creates a new Executor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Executor instance
             */
            public static create(properties?: mesos.ResourceUsage.IExecutor): mesos.ResourceUsage.Executor;

            /**
             * Encodes the specified Executor message. Does not implicitly {@link mesos.ResourceUsage.Executor.verify|verify} messages.
             * @param message Executor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.ResourceUsage.IExecutor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Executor message, length delimited. Does not implicitly {@link mesos.ResourceUsage.Executor.verify|verify} messages.
             * @param message Executor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.ResourceUsage.IExecutor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Executor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Executor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ResourceUsage.Executor;

            /**
             * Decodes an Executor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Executor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ResourceUsage.Executor;

            /**
             * Verifies an Executor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Executor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Executor
             */
            public static fromObject(object: { [k: string]: any }): mesos.ResourceUsage.Executor;

            /**
             * Creates a plain object from an Executor message. Also converts values to other types if specified.
             * @param message Executor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.ResourceUsage.Executor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Executor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Executor {

            /** Properties of a Task. */
            interface ITask {

                /** Task name */
                name: string;

                /** Task id */
                id: mesos.ITaskID;

                /** Task resources */
                resources?: mesos.IResource[];

                /** Task labels */
                labels?: mesos.ILabels;
            }

            /** Represents a Task. */
            class Task {

                /**
                 * Constructs a new Task.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.ResourceUsage.Executor.ITask);

                /** Task name. */
                public name: string;

                /** Task id. */
                public id: mesos.ITaskID;

                /** Task resources. */
                public resources: mesos.IResource[];

                /** Task labels. */
                public labels?: (mesos.ILabels|null);

                /**
                 * Creates a new Task instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Task instance
                 */
                public static create(properties?: mesos.ResourceUsage.Executor.ITask): mesos.ResourceUsage.Executor.Task;

                /**
                 * Encodes the specified Task message. Does not implicitly {@link mesos.ResourceUsage.Executor.Task.verify|verify} messages.
                 * @param message Task message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.ResourceUsage.Executor.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Task message, length delimited. Does not implicitly {@link mesos.ResourceUsage.Executor.Task.verify|verify} messages.
                 * @param message Task message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.ResourceUsage.Executor.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Task message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Task
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ResourceUsage.Executor.Task;

                /**
                 * Decodes a Task message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Task
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ResourceUsage.Executor.Task;

                /**
                 * Verifies a Task message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Task message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Task
                 */
                public static fromObject(object: { [k: string]: any }): mesos.ResourceUsage.Executor.Task;

                /**
                 * Creates a plain object from a Task message. Also converts values to other types if specified.
                 * @param message Task
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.ResourceUsage.Executor.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Task to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Properties of a PerfStatistics. */
    interface IPerfStatistics {

        /** PerfStatistics timestamp */
        timestamp: number;

        /** PerfStatistics duration */
        duration: number;

        /** PerfStatistics cycles */
        cycles?: number;

        /** PerfStatistics stalledCyclesFrontend */
        stalledCyclesFrontend?: number;

        /** PerfStatistics stalledCyclesBackend */
        stalledCyclesBackend?: number;

        /** PerfStatistics instructions */
        instructions?: number;

        /** PerfStatistics cacheReferences */
        cacheReferences?: number;

        /** PerfStatistics cacheMisses */
        cacheMisses?: number;

        /** PerfStatistics branches */
        branches?: number;

        /** PerfStatistics branchMisses */
        branchMisses?: number;

        /** PerfStatistics busCycles */
        busCycles?: number;

        /** PerfStatistics refCycles */
        refCycles?: number;

        /** PerfStatistics cpuClock */
        cpuClock?: number;

        /** PerfStatistics taskClock */
        taskClock?: number;

        /** PerfStatistics pageFaults */
        pageFaults?: number;

        /** PerfStatistics minorFaults */
        minorFaults?: number;

        /** PerfStatistics majorFaults */
        majorFaults?: number;

        /** PerfStatistics contextSwitches */
        contextSwitches?: number;

        /** PerfStatistics cpuMigrations */
        cpuMigrations?: number;

        /** PerfStatistics alignmentFaults */
        alignmentFaults?: number;

        /** PerfStatistics emulationFaults */
        emulationFaults?: number;

        /** PerfStatistics l1DcacheLoads */
        l1DcacheLoads?: number;

        /** PerfStatistics l1DcacheLoadMisses */
        l1DcacheLoadMisses?: number;

        /** PerfStatistics l1DcacheStores */
        l1DcacheStores?: number;

        /** PerfStatistics l1DcacheStoreMisses */
        l1DcacheStoreMisses?: number;

        /** PerfStatistics l1DcachePrefetches */
        l1DcachePrefetches?: number;

        /** PerfStatistics l1DcachePrefetchMisses */
        l1DcachePrefetchMisses?: number;

        /** PerfStatistics l1IcacheLoads */
        l1IcacheLoads?: number;

        /** PerfStatistics l1IcacheLoadMisses */
        l1IcacheLoadMisses?: number;

        /** PerfStatistics l1IcachePrefetches */
        l1IcachePrefetches?: number;

        /** PerfStatistics l1IcachePrefetchMisses */
        l1IcachePrefetchMisses?: number;

        /** PerfStatistics llcLoads */
        llcLoads?: number;

        /** PerfStatistics llcLoadMisses */
        llcLoadMisses?: number;

        /** PerfStatistics llcStores */
        llcStores?: number;

        /** PerfStatistics llcStoreMisses */
        llcStoreMisses?: number;

        /** PerfStatistics llcPrefetches */
        llcPrefetches?: number;

        /** PerfStatistics llcPrefetchMisses */
        llcPrefetchMisses?: number;

        /** PerfStatistics dtlbLoads */
        dtlbLoads?: number;

        /** PerfStatistics dtlbLoadMisses */
        dtlbLoadMisses?: number;

        /** PerfStatistics dtlbStores */
        dtlbStores?: number;

        /** PerfStatistics dtlbStoreMisses */
        dtlbStoreMisses?: number;

        /** PerfStatistics dtlbPrefetches */
        dtlbPrefetches?: number;

        /** PerfStatistics dtlbPrefetchMisses */
        dtlbPrefetchMisses?: number;

        /** PerfStatistics itlbLoads */
        itlbLoads?: number;

        /** PerfStatistics itlbLoadMisses */
        itlbLoadMisses?: number;

        /** PerfStatistics branchLoads */
        branchLoads?: number;

        /** PerfStatistics branchLoadMisses */
        branchLoadMisses?: number;

        /** PerfStatistics nodeLoads */
        nodeLoads?: number;

        /** PerfStatistics nodeLoadMisses */
        nodeLoadMisses?: number;

        /** PerfStatistics nodeStores */
        nodeStores?: number;

        /** PerfStatistics nodeStoreMisses */
        nodeStoreMisses?: number;

        /** PerfStatistics nodePrefetches */
        nodePrefetches?: number;

        /** PerfStatistics nodePrefetchMisses */
        nodePrefetchMisses?: number;
    }

    /**
     * Describes a sample of events from "perf stat". Only available on
     * Linux.
     *
     * NOTE: Each optional field matches the name of a perf event (see
     * "perf list") with the following changes:
     * 1. Names are downcased.
     * 2. Hyphens ('-') are replaced with underscores ('_').
     * 3. Events with alternate names use the name "perf stat" returns,
     * e.g., for the event "cycles OR cpu-cycles" perf always returns
     * cycles.
     */
    class PerfStatistics {

        /**
         * Constructs a new PerfStatistics.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IPerfStatistics);

        /** PerfStatistics timestamp. */
        public timestamp: number;

        /** PerfStatistics duration. */
        public duration: number;

        /** PerfStatistics cycles. */
        public cycles: number;

        /** PerfStatistics stalledCyclesFrontend. */
        public stalledCyclesFrontend: number;

        /** PerfStatistics stalledCyclesBackend. */
        public stalledCyclesBackend: number;

        /** PerfStatistics instructions. */
        public instructions: number;

        /** PerfStatistics cacheReferences. */
        public cacheReferences: number;

        /** PerfStatistics cacheMisses. */
        public cacheMisses: number;

        /** PerfStatistics branches. */
        public branches: number;

        /** PerfStatistics branchMisses. */
        public branchMisses: number;

        /** PerfStatistics busCycles. */
        public busCycles: number;

        /** PerfStatistics refCycles. */
        public refCycles: number;

        /** PerfStatistics cpuClock. */
        public cpuClock: number;

        /** PerfStatistics taskClock. */
        public taskClock: number;

        /** PerfStatistics pageFaults. */
        public pageFaults: number;

        /** PerfStatistics minorFaults. */
        public minorFaults: number;

        /** PerfStatistics majorFaults. */
        public majorFaults: number;

        /** PerfStatistics contextSwitches. */
        public contextSwitches: number;

        /** PerfStatistics cpuMigrations. */
        public cpuMigrations: number;

        /** PerfStatistics alignmentFaults. */
        public alignmentFaults: number;

        /** PerfStatistics emulationFaults. */
        public emulationFaults: number;

        /** PerfStatistics l1DcacheLoads. */
        public l1DcacheLoads: number;

        /** PerfStatistics l1DcacheLoadMisses. */
        public l1DcacheLoadMisses: number;

        /** PerfStatistics l1DcacheStores. */
        public l1DcacheStores: number;

        /** PerfStatistics l1DcacheStoreMisses. */
        public l1DcacheStoreMisses: number;

        /** PerfStatistics l1DcachePrefetches. */
        public l1DcachePrefetches: number;

        /** PerfStatistics l1DcachePrefetchMisses. */
        public l1DcachePrefetchMisses: number;

        /** PerfStatistics l1IcacheLoads. */
        public l1IcacheLoads: number;

        /** PerfStatistics l1IcacheLoadMisses. */
        public l1IcacheLoadMisses: number;

        /** PerfStatistics l1IcachePrefetches. */
        public l1IcachePrefetches: number;

        /** PerfStatistics l1IcachePrefetchMisses. */
        public l1IcachePrefetchMisses: number;

        /** PerfStatistics llcLoads. */
        public llcLoads: number;

        /** PerfStatistics llcLoadMisses. */
        public llcLoadMisses: number;

        /** PerfStatistics llcStores. */
        public llcStores: number;

        /** PerfStatistics llcStoreMisses. */
        public llcStoreMisses: number;

        /** PerfStatistics llcPrefetches. */
        public llcPrefetches: number;

        /** PerfStatistics llcPrefetchMisses. */
        public llcPrefetchMisses: number;

        /** PerfStatistics dtlbLoads. */
        public dtlbLoads: number;

        /** PerfStatistics dtlbLoadMisses. */
        public dtlbLoadMisses: number;

        /** PerfStatistics dtlbStores. */
        public dtlbStores: number;

        /** PerfStatistics dtlbStoreMisses. */
        public dtlbStoreMisses: number;

        /** PerfStatistics dtlbPrefetches. */
        public dtlbPrefetches: number;

        /** PerfStatistics dtlbPrefetchMisses. */
        public dtlbPrefetchMisses: number;

        /** PerfStatistics itlbLoads. */
        public itlbLoads: number;

        /** PerfStatistics itlbLoadMisses. */
        public itlbLoadMisses: number;

        /** PerfStatistics branchLoads. */
        public branchLoads: number;

        /** PerfStatistics branchLoadMisses. */
        public branchLoadMisses: number;

        /** PerfStatistics nodeLoads. */
        public nodeLoads: number;

        /** PerfStatistics nodeLoadMisses. */
        public nodeLoadMisses: number;

        /** PerfStatistics nodeStores. */
        public nodeStores: number;

        /** PerfStatistics nodeStoreMisses. */
        public nodeStoreMisses: number;

        /** PerfStatistics nodePrefetches. */
        public nodePrefetches: number;

        /** PerfStatistics nodePrefetchMisses. */
        public nodePrefetchMisses: number;

        /**
         * Creates a new PerfStatistics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PerfStatistics instance
         */
        public static create(properties?: mesos.IPerfStatistics): mesos.PerfStatistics;

        /**
         * Encodes the specified PerfStatistics message. Does not implicitly {@link mesos.PerfStatistics.verify|verify} messages.
         * @param message PerfStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IPerfStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PerfStatistics message, length delimited. Does not implicitly {@link mesos.PerfStatistics.verify|verify} messages.
         * @param message PerfStatistics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IPerfStatistics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PerfStatistics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PerfStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.PerfStatistics;

        /**
         * Decodes a PerfStatistics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PerfStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.PerfStatistics;

        /**
         * Verifies a PerfStatistics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PerfStatistics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PerfStatistics
         */
        public static fromObject(object: { [k: string]: any }): mesos.PerfStatistics;

        /**
         * Creates a plain object from a PerfStatistics message. Also converts values to other types if specified.
         * @param message PerfStatistics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.PerfStatistics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PerfStatistics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request agentId */
        agentId?: mesos.IAgentID;

        /** Request resources */
        resources?: mesos.IResource[];
    }

    /**
     * Describes a request for resources that can be used by a framework
     * to proactively influence the allocator.  If 'agent_id' is provided
     * then this request is assumed to only apply to resources on that
     * agent.
     */
    class Request {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IRequest);

        /** Request agentId. */
        public agentId?: (mesos.IAgentID|null);

        /** Request resources. */
        public resources: mesos.IResource[];

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: mesos.IRequest): mesos.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link mesos.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link mesos.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): mesos.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Offer. */
    interface IOffer {

        /** Offer id */
        id: mesos.IOfferID;

        /** Offer frameworkId */
        frameworkId: mesos.IFrameworkID;

        /** Offer agentId */
        agentId: mesos.IAgentID;

        /** Offer hostname */
        hostname: string;

        /** Offer url */
        url?: mesos.IURL;

        /** Offer resources */
        resources?: mesos.IResource[];

        /** Offer attributes */
        attributes?: mesos.IAttribute[];

        /** Offer executorIds */
        executorIds?: mesos.IExecutorID[];

        /** Offer unavailability */
        unavailability?: mesos.IUnavailability;

        /** Offer allocationInfo */
        allocationInfo?: mesos.Resource.IAllocationInfo;
    }

    /**
     * Describes some resources available on an agent. An offer only
     * contains resources from a single agent.
     */
    class Offer {

        /**
         * Constructs a new Offer.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IOffer);

        /** Offer id. */
        public id: mesos.IOfferID;

        /** Offer frameworkId. */
        public frameworkId: mesos.IFrameworkID;

        /** Offer agentId. */
        public agentId: mesos.IAgentID;

        /** Offer hostname. */
        public hostname: string;

        /** Offer url. */
        public url?: (mesos.IURL|null);

        /** Offer resources. */
        public resources: mesos.IResource[];

        /** Offer attributes. */
        public attributes: mesos.IAttribute[];

        /** Offer executorIds. */
        public executorIds: mesos.IExecutorID[];

        /** Offer unavailability. */
        public unavailability?: (mesos.IUnavailability|null);

        /** Offer allocationInfo. */
        public allocationInfo?: (mesos.Resource.IAllocationInfo|null);

        /**
         * Creates a new Offer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Offer instance
         */
        public static create(properties?: mesos.IOffer): mesos.Offer;

        /**
         * Encodes the specified Offer message. Does not implicitly {@link mesos.Offer.verify|verify} messages.
         * @param message Offer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IOffer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Offer message, length delimited. Does not implicitly {@link mesos.Offer.verify|verify} messages.
         * @param message Offer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IOffer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Offer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Offer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Offer;

        /**
         * Decodes an Offer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Offer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Offer;

        /**
         * Verifies an Offer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Offer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Offer
         */
        public static fromObject(object: { [k: string]: any }): mesos.Offer;

        /**
         * Creates a plain object from an Offer message. Also converts values to other types if specified.
         * @param message Offer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Offer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Offer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Offer {

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation type */
            type?: mesos.Offer.Operation.Type;

            /** Operation launch */
            launch?: mesos.Offer.Operation.ILaunch;

            /** Operation launchGroup */
            launchGroup?: mesos.Offer.Operation.ILaunchGroup;

            /** Operation reserve */
            reserve?: mesos.Offer.Operation.IReserve;

            /** Operation unreserve */
            unreserve?: mesos.Offer.Operation.IUnreserve;

            /** Operation create */
            create?: mesos.Offer.Operation.ICreate;

            /** Operation destroy */
            destroy?: mesos.Offer.Operation.IDestroy;
        }

        /** Represents an Operation. */
        class Operation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Offer.IOperation);

            /** Operation type. */
            public type: mesos.Offer.Operation.Type;

            /** Operation launch. */
            public launch?: (mesos.Offer.Operation.ILaunch|null);

            /** Operation launchGroup. */
            public launchGroup?: (mesos.Offer.Operation.ILaunchGroup|null);

            /** Operation reserve. */
            public reserve?: (mesos.Offer.Operation.IReserve|null);

            /** Operation unreserve. */
            public unreserve?: (mesos.Offer.Operation.IUnreserve|null);

            /** Operation create. */
            public create?: (mesos.Offer.Operation.ICreate|null);

            /** Operation destroy. */
            public destroy?: (mesos.Offer.Operation.IDestroy|null);

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: mesos.Offer.IOperation): mesos.Offer.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link mesos.Offer.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Offer.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link mesos.Offer.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Offer.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Offer.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Offer.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): mesos.Offer.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Offer.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Operation {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                LAUNCH = 1,
                LAUNCH_GROUP = 6,
                RESERVE = 2,
                UNRESERVE = 3,
                CREATE = 4,
                DESTROY = 5
            }

            /** Properties of a Launch. */
            interface ILaunch {

                /** Launch taskInfos */
                taskInfos?: mesos.ITaskInfo[];
            }

            /** Represents a Launch. */
            class Launch {

                /**
                 * Constructs a new Launch.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Offer.Operation.ILaunch);

                /** Launch taskInfos. */
                public taskInfos: mesos.ITaskInfo[];

                /**
                 * Creates a new Launch instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Launch instance
                 */
                public static create(properties?: mesos.Offer.Operation.ILaunch): mesos.Offer.Operation.Launch;

                /**
                 * Encodes the specified Launch message. Does not implicitly {@link mesos.Offer.Operation.Launch.verify|verify} messages.
                 * @param message Launch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Offer.Operation.ILaunch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Launch message, length delimited. Does not implicitly {@link mesos.Offer.Operation.Launch.verify|verify} messages.
                 * @param message Launch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Offer.Operation.ILaunch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Launch message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Launch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Offer.Operation.Launch;

                /**
                 * Decodes a Launch message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Launch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Offer.Operation.Launch;

                /**
                 * Verifies a Launch message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Launch message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Launch
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Offer.Operation.Launch;

                /**
                 * Creates a plain object from a Launch message. Also converts values to other types if specified.
                 * @param message Launch
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Offer.Operation.Launch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Launch to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LaunchGroup. */
            interface ILaunchGroup {

                /** LaunchGroup executor */
                executor: mesos.IExecutorInfo;

                /** LaunchGroup taskGroup */
                taskGroup: mesos.ITaskGroupInfo;
            }

            /** Represents a LaunchGroup. */
            class LaunchGroup {

                /**
                 * Constructs a new LaunchGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Offer.Operation.ILaunchGroup);

                /** LaunchGroup executor. */
                public executor: mesos.IExecutorInfo;

                /** LaunchGroup taskGroup. */
                public taskGroup: mesos.ITaskGroupInfo;

                /**
                 * Creates a new LaunchGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LaunchGroup instance
                 */
                public static create(properties?: mesos.Offer.Operation.ILaunchGroup): mesos.Offer.Operation.LaunchGroup;

                /**
                 * Encodes the specified LaunchGroup message. Does not implicitly {@link mesos.Offer.Operation.LaunchGroup.verify|verify} messages.
                 * @param message LaunchGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Offer.Operation.ILaunchGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LaunchGroup message, length delimited. Does not implicitly {@link mesos.Offer.Operation.LaunchGroup.verify|verify} messages.
                 * @param message LaunchGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Offer.Operation.ILaunchGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LaunchGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LaunchGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Offer.Operation.LaunchGroup;

                /**
                 * Decodes a LaunchGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LaunchGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Offer.Operation.LaunchGroup;

                /**
                 * Verifies a LaunchGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LaunchGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LaunchGroup
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Offer.Operation.LaunchGroup;

                /**
                 * Creates a plain object from a LaunchGroup message. Also converts values to other types if specified.
                 * @param message LaunchGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Offer.Operation.LaunchGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LaunchGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Reserve. */
            interface IReserve {

                /** Reserve resources */
                resources?: mesos.IResource[];
            }

            /** Represents a Reserve. */
            class Reserve {

                /**
                 * Constructs a new Reserve.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Offer.Operation.IReserve);

                /** Reserve resources. */
                public resources: mesos.IResource[];

                /**
                 * Creates a new Reserve instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Reserve instance
                 */
                public static create(properties?: mesos.Offer.Operation.IReserve): mesos.Offer.Operation.Reserve;

                /**
                 * Encodes the specified Reserve message. Does not implicitly {@link mesos.Offer.Operation.Reserve.verify|verify} messages.
                 * @param message Reserve message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Offer.Operation.IReserve, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Reserve message, length delimited. Does not implicitly {@link mesos.Offer.Operation.Reserve.verify|verify} messages.
                 * @param message Reserve message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Offer.Operation.IReserve, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Reserve message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Reserve
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Offer.Operation.Reserve;

                /**
                 * Decodes a Reserve message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Reserve
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Offer.Operation.Reserve;

                /**
                 * Verifies a Reserve message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Reserve message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Reserve
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Offer.Operation.Reserve;

                /**
                 * Creates a plain object from a Reserve message. Also converts values to other types if specified.
                 * @param message Reserve
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Offer.Operation.Reserve, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Reserve to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Unreserve. */
            interface IUnreserve {

                /** Unreserve resources */
                resources?: mesos.IResource[];
            }

            /** Represents an Unreserve. */
            class Unreserve {

                /**
                 * Constructs a new Unreserve.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Offer.Operation.IUnreserve);

                /** Unreserve resources. */
                public resources: mesos.IResource[];

                /**
                 * Creates a new Unreserve instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Unreserve instance
                 */
                public static create(properties?: mesos.Offer.Operation.IUnreserve): mesos.Offer.Operation.Unreserve;

                /**
                 * Encodes the specified Unreserve message. Does not implicitly {@link mesos.Offer.Operation.Unreserve.verify|verify} messages.
                 * @param message Unreserve message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Offer.Operation.IUnreserve, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Unreserve message, length delimited. Does not implicitly {@link mesos.Offer.Operation.Unreserve.verify|verify} messages.
                 * @param message Unreserve message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Offer.Operation.IUnreserve, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Unreserve message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Unreserve
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Offer.Operation.Unreserve;

                /**
                 * Decodes an Unreserve message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Unreserve
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Offer.Operation.Unreserve;

                /**
                 * Verifies an Unreserve message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Unreserve message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Unreserve
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Offer.Operation.Unreserve;

                /**
                 * Creates a plain object from an Unreserve message. Also converts values to other types if specified.
                 * @param message Unreserve
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Offer.Operation.Unreserve, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Unreserve to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Create. */
            interface ICreate {

                /** Create volumes */
                volumes?: mesos.IResource[];
            }

            /** Represents a Create. */
            class Create {

                /**
                 * Constructs a new Create.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Offer.Operation.ICreate);

                /** Create volumes. */
                public volumes: mesos.IResource[];

                /**
                 * Creates a new Create instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Create instance
                 */
                public static create(properties?: mesos.Offer.Operation.ICreate): mesos.Offer.Operation.Create;

                /**
                 * Encodes the specified Create message. Does not implicitly {@link mesos.Offer.Operation.Create.verify|verify} messages.
                 * @param message Create message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Offer.Operation.ICreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Create message, length delimited. Does not implicitly {@link mesos.Offer.Operation.Create.verify|verify} messages.
                 * @param message Create message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Offer.Operation.ICreate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Create message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Create
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Offer.Operation.Create;

                /**
                 * Decodes a Create message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Create
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Offer.Operation.Create;

                /**
                 * Verifies a Create message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Create message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Create
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Offer.Operation.Create;

                /**
                 * Creates a plain object from a Create message. Also converts values to other types if specified.
                 * @param message Create
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Offer.Operation.Create, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Create to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Destroy. */
            interface IDestroy {

                /** Destroy volumes */
                volumes?: mesos.IResource[];
            }

            /** Represents a Destroy. */
            class Destroy {

                /**
                 * Constructs a new Destroy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Offer.Operation.IDestroy);

                /** Destroy volumes. */
                public volumes: mesos.IResource[];

                /**
                 * Creates a new Destroy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Destroy instance
                 */
                public static create(properties?: mesos.Offer.Operation.IDestroy): mesos.Offer.Operation.Destroy;

                /**
                 * Encodes the specified Destroy message. Does not implicitly {@link mesos.Offer.Operation.Destroy.verify|verify} messages.
                 * @param message Destroy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Offer.Operation.IDestroy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Destroy message, length delimited. Does not implicitly {@link mesos.Offer.Operation.Destroy.verify|verify} messages.
                 * @param message Destroy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Offer.Operation.IDestroy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Destroy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Destroy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Offer.Operation.Destroy;

                /**
                 * Decodes a Destroy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Destroy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Offer.Operation.Destroy;

                /**
                 * Verifies a Destroy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Destroy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Destroy
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Offer.Operation.Destroy;

                /**
                 * Creates a plain object from a Destroy message. Also converts values to other types if specified.
                 * @param message Destroy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Offer.Operation.Destroy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Destroy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Properties of an InverseOffer. */
    interface IInverseOffer {

        /** InverseOffer id */
        id: mesos.IOfferID;

        /** InverseOffer url */
        url?: mesos.IURL;

        /** InverseOffer frameworkId */
        frameworkId: mesos.IFrameworkID;

        /** InverseOffer agentId */
        agentId?: mesos.IAgentID;

        /** InverseOffer unavailability */
        unavailability: mesos.IUnavailability;

        /** InverseOffer resources */
        resources?: mesos.IResource[];
    }

    /** A request to return some resources occupied by a framework. */
    class InverseOffer {

        /**
         * Constructs a new InverseOffer.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IInverseOffer);

        /** InverseOffer id. */
        public id: mesos.IOfferID;

        /** InverseOffer url. */
        public url?: (mesos.IURL|null);

        /** InverseOffer frameworkId. */
        public frameworkId: mesos.IFrameworkID;

        /** InverseOffer agentId. */
        public agentId?: (mesos.IAgentID|null);

        /** InverseOffer unavailability. */
        public unavailability: mesos.IUnavailability;

        /** InverseOffer resources. */
        public resources: mesos.IResource[];

        /**
         * Creates a new InverseOffer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InverseOffer instance
         */
        public static create(properties?: mesos.IInverseOffer): mesos.InverseOffer;

        /**
         * Encodes the specified InverseOffer message. Does not implicitly {@link mesos.InverseOffer.verify|verify} messages.
         * @param message InverseOffer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IInverseOffer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InverseOffer message, length delimited. Does not implicitly {@link mesos.InverseOffer.verify|verify} messages.
         * @param message InverseOffer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IInverseOffer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InverseOffer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InverseOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.InverseOffer;

        /**
         * Decodes an InverseOffer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InverseOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.InverseOffer;

        /**
         * Verifies an InverseOffer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InverseOffer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InverseOffer
         */
        public static fromObject(object: { [k: string]: any }): mesos.InverseOffer;

        /**
         * Creates a plain object from an InverseOffer message. Also converts values to other types if specified.
         * @param message InverseOffer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.InverseOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InverseOffer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskInfo. */
    interface ITaskInfo {

        /** TaskInfo name */
        name: string;

        /** TaskInfo taskId */
        taskId: mesos.ITaskID;

        /** TaskInfo agentId */
        agentId: mesos.IAgentID;

        /** TaskInfo resources */
        resources?: mesos.IResource[];

        /** TaskInfo executor */
        executor?: mesos.IExecutorInfo;

        /** TaskInfo command */
        command?: mesos.ICommandInfo;

        /** TaskInfo container */
        container?: mesos.IContainerInfo;

        /** TaskInfo healthCheck */
        healthCheck?: mesos.IHealthCheck;

        /** TaskInfo check */
        check?: mesos.ICheckInfo;

        /** TaskInfo killPolicy */
        killPolicy?: mesos.IKillPolicy;

        /** TaskInfo data */
        data?: Uint8Array;

        /** TaskInfo labels */
        labels?: mesos.ILabels;

        /** TaskInfo discovery */
        discovery?: mesos.IDiscoveryInfo;
    }

    /**
     * Describes a task. Passed from the scheduler all the way to an
     * executor (see SchedulerDriver::launchTasks and
     * Executor::launchTask). Either ExecutorInfo or CommandInfo should be set.
     * A different executor can be used to launch this task, and subsequent tasks
     * meant for the same executor can reuse the same ExecutorInfo struct.
     */
    class TaskInfo {

        /**
         * Constructs a new TaskInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITaskInfo);

        /** TaskInfo name. */
        public name: string;

        /** TaskInfo taskId. */
        public taskId: mesos.ITaskID;

        /** TaskInfo agentId. */
        public agentId: mesos.IAgentID;

        /** TaskInfo resources. */
        public resources: mesos.IResource[];

        /** TaskInfo executor. */
        public executor?: (mesos.IExecutorInfo|null);

        /** TaskInfo command. */
        public command?: (mesos.ICommandInfo|null);

        /** TaskInfo container. */
        public container?: (mesos.IContainerInfo|null);

        /** TaskInfo healthCheck. */
        public healthCheck?: (mesos.IHealthCheck|null);

        /** TaskInfo check. */
        public check?: (mesos.ICheckInfo|null);

        /** TaskInfo killPolicy. */
        public killPolicy?: (mesos.IKillPolicy|null);

        /** TaskInfo data. */
        public data: Uint8Array;

        /** TaskInfo labels. */
        public labels?: (mesos.ILabels|null);

        /** TaskInfo discovery. */
        public discovery?: (mesos.IDiscoveryInfo|null);

        /**
         * Creates a new TaskInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskInfo instance
         */
        public static create(properties?: mesos.ITaskInfo): mesos.TaskInfo;

        /**
         * Encodes the specified TaskInfo message. Does not implicitly {@link mesos.TaskInfo.verify|verify} messages.
         * @param message TaskInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskInfo message, length delimited. Does not implicitly {@link mesos.TaskInfo.verify|verify} messages.
         * @param message TaskInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITaskInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TaskInfo;

        /**
         * Decodes a TaskInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TaskInfo;

        /**
         * Verifies a TaskInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.TaskInfo;

        /**
         * Creates a plain object from a TaskInfo message. Also converts values to other types if specified.
         * @param message TaskInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.TaskInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TaskGroupInfo. */
    interface ITaskGroupInfo {

        /** TaskGroupInfo tasks */
        tasks?: mesos.ITaskInfo[];
    }

    /**
     * Describes a group of tasks that belong to an executor. The
     * executor will receive the task group in a single message to
     * allow the group to be launched "atomically".
     *
     * NOTES:
     * 1) `NetworkInfo` must not be set inside task's `ContainerInfo`.
     * 2) `TaskInfo.executor` doesn't need to set. If set, it should match
     * `LaunchGroup.executor`.
     */
    class TaskGroupInfo {

        /**
         * Constructs a new TaskGroupInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITaskGroupInfo);

        /** TaskGroupInfo tasks. */
        public tasks: mesos.ITaskInfo[];

        /**
         * Creates a new TaskGroupInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskGroupInfo instance
         */
        public static create(properties?: mesos.ITaskGroupInfo): mesos.TaskGroupInfo;

        /**
         * Encodes the specified TaskGroupInfo message. Does not implicitly {@link mesos.TaskGroupInfo.verify|verify} messages.
         * @param message TaskGroupInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITaskGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskGroupInfo message, length delimited. Does not implicitly {@link mesos.TaskGroupInfo.verify|verify} messages.
         * @param message TaskGroupInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITaskGroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskGroupInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskGroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TaskGroupInfo;

        /**
         * Decodes a TaskGroupInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskGroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TaskGroupInfo;

        /**
         * Verifies a TaskGroupInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskGroupInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskGroupInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.TaskGroupInfo;

        /**
         * Creates a plain object from a TaskGroupInfo message. Also converts values to other types if specified.
         * @param message TaskGroupInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.TaskGroupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskGroupInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Task. */
    interface ITask {

        /** Task name */
        name: string;

        /** Task taskId */
        taskId: mesos.ITaskID;

        /** Task frameworkId */
        frameworkId: mesos.IFrameworkID;

        /** Task executorId */
        executorId?: mesos.IExecutorID;

        /** Task agentId */
        agentId: mesos.IAgentID;

        /** Task state */
        state: mesos.TaskState;

        /** Task resources */
        resources?: mesos.IResource[];

        /** Task statuses */
        statuses?: mesos.ITaskStatus[];

        /** Task statusUpdateState */
        statusUpdateState?: mesos.TaskState;

        /** Task statusUpdateUuid */
        statusUpdateUuid?: Uint8Array;

        /** Task labels */
        labels?: mesos.ILabels;

        /** Task discovery */
        discovery?: mesos.IDiscoveryInfo;

        /** Task container */
        container?: mesos.IContainerInfo;

        /** Task user */
        user?: string;
    }

    /**
     * Describes a task, similar to `TaskInfo`.
     *
     * `Task` is used in some of the Mesos messages found below.
     * `Task` is used instead of `TaskInfo` if:
     * 1) we need additional IDs, such as a specific
     * framework, executor, or agent; or
     * 2) we do not need the additional data, such as the command run by the
     * task or the health checks.  These additional fields may be large and
     * unnecessary for some Mesos messages.
     *
     * `Task` is generally constructed from a `TaskInfo`.  See protobuf::createTask.
     */
    class Task {

        /**
         * Constructs a new Task.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITask);

        /** Task name. */
        public name: string;

        /** Task taskId. */
        public taskId: mesos.ITaskID;

        /** Task frameworkId. */
        public frameworkId: mesos.IFrameworkID;

        /** Task executorId. */
        public executorId?: (mesos.IExecutorID|null);

        /** Task agentId. */
        public agentId: mesos.IAgentID;

        /** Task state. */
        public state: mesos.TaskState;

        /** Task resources. */
        public resources: mesos.IResource[];

        /** Task statuses. */
        public statuses: mesos.ITaskStatus[];

        /** Task statusUpdateState. */
        public statusUpdateState: mesos.TaskState;

        /** Task statusUpdateUuid. */
        public statusUpdateUuid: Uint8Array;

        /** Task labels. */
        public labels?: (mesos.ILabels|null);

        /** Task discovery. */
        public discovery?: (mesos.IDiscoveryInfo|null);

        /** Task container. */
        public container?: (mesos.IContainerInfo|null);

        /** Task user. */
        public user: string;

        /**
         * Creates a new Task instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Task instance
         */
        public static create(properties?: mesos.ITask): mesos.Task;

        /**
         * Encodes the specified Task message. Does not implicitly {@link mesos.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link mesos.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Task;

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Task;

        /**
         * Verifies a Task message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Task
         */
        public static fromObject(object: { [k: string]: any }): mesos.Task;

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @param message Task
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Task to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckStatusInfo. */
    interface ICheckStatusInfo {

        /** CheckStatusInfo type */
        type?: mesos.CheckInfo.Type;

        /** CheckStatusInfo command */
        command?: mesos.CheckStatusInfo.ICommand;

        /** CheckStatusInfo http */
        http?: mesos.CheckStatusInfo.IHttp;
    }

    /**
     * Describes the status of a check. Type and the corresponding field, i.e.,
     * `command` or `http` must be set. If the result of the check is not available
     * (e.g., the check timed out), these fields must contain empty messages, i.e.,
     * `exit_code` or `status_code` will be unset.
     *
     * NOTE: This API is unstable and the related feature is experimental.
     */
    class CheckStatusInfo {

        /**
         * Constructs a new CheckStatusInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ICheckStatusInfo);

        /** CheckStatusInfo type. */
        public type: mesos.CheckInfo.Type;

        /** CheckStatusInfo command. */
        public command?: (mesos.CheckStatusInfo.ICommand|null);

        /** CheckStatusInfo http. */
        public http?: (mesos.CheckStatusInfo.IHttp|null);

        /**
         * Creates a new CheckStatusInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckStatusInfo instance
         */
        public static create(properties?: mesos.ICheckStatusInfo): mesos.CheckStatusInfo;

        /**
         * Encodes the specified CheckStatusInfo message. Does not implicitly {@link mesos.CheckStatusInfo.verify|verify} messages.
         * @param message CheckStatusInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ICheckStatusInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckStatusInfo message, length delimited. Does not implicitly {@link mesos.CheckStatusInfo.verify|verify} messages.
         * @param message CheckStatusInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ICheckStatusInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckStatusInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckStatusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CheckStatusInfo;

        /**
         * Decodes a CheckStatusInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckStatusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CheckStatusInfo;

        /**
         * Verifies a CheckStatusInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckStatusInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckStatusInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.CheckStatusInfo;

        /**
         * Creates a plain object from a CheckStatusInfo message. Also converts values to other types if specified.
         * @param message CheckStatusInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.CheckStatusInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckStatusInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CheckStatusInfo {

        /** Properties of a Command. */
        interface ICommand {

            /** Command exitCode */
            exitCode?: number;
        }

        /** Represents a Command. */
        class Command {

            /**
             * Constructs a new Command.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.CheckStatusInfo.ICommand);

            /** Command exitCode. */
            public exitCode: number;

            /**
             * Creates a new Command instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Command instance
             */
            public static create(properties?: mesos.CheckStatusInfo.ICommand): mesos.CheckStatusInfo.Command;

            /**
             * Encodes the specified Command message. Does not implicitly {@link mesos.CheckStatusInfo.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.CheckStatusInfo.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link mesos.CheckStatusInfo.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.CheckStatusInfo.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Command message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CheckStatusInfo.Command;

            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CheckStatusInfo.Command;

            /**
             * Verifies a Command message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Command
             */
            public static fromObject(object: { [k: string]: any }): mesos.CheckStatusInfo.Command;

            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @param message Command
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.CheckStatusInfo.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Command to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http statusCode */
            statusCode?: number;
        }

        /** Represents a Http. */
        class Http {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.CheckStatusInfo.IHttp);

            /** Http statusCode. */
            public statusCode: number;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: mesos.CheckStatusInfo.IHttp): mesos.CheckStatusInfo.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link mesos.CheckStatusInfo.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.CheckStatusInfo.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link mesos.CheckStatusInfo.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.CheckStatusInfo.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CheckStatusInfo.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CheckStatusInfo.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): mesos.CheckStatusInfo.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.CheckStatusInfo.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a TaskStatus. */
    interface ITaskStatus {

        /** TaskStatus taskId */
        taskId: mesos.ITaskID;

        /** TaskStatus state */
        state: mesos.TaskState;

        /** TaskStatus message */
        message?: string;

        /** TaskStatus source */
        source?: mesos.TaskStatus.Source;

        /** TaskStatus reason */
        reason?: mesos.TaskStatus.Reason;

        /** TaskStatus data */
        data?: Uint8Array;

        /** TaskStatus agentId */
        agentId?: mesos.IAgentID;

        /** TaskStatus executorId */
        executorId?: mesos.IExecutorID;

        /** TaskStatus timestamp */
        timestamp?: number;

        /** TaskStatus uuid */
        uuid?: Uint8Array;

        /** TaskStatus healthy */
        healthy?: boolean;

        /** TaskStatus checkStatus */
        checkStatus?: mesos.ICheckStatusInfo;

        /** TaskStatus labels */
        labels?: mesos.ILabels;

        /** TaskStatus containerStatus */
        containerStatus?: mesos.IContainerStatus;

        /** TaskStatus unreachableTime */
        unreachableTime?: mesos.ITimeInfo;
    }

    /** Describes the current status of a task. */
    class TaskStatus {

        /**
         * Constructs a new TaskStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITaskStatus);

        /** TaskStatus taskId. */
        public taskId: mesos.ITaskID;

        /** TaskStatus state. */
        public state: mesos.TaskState;

        /** TaskStatus message. */
        public message: string;

        /** TaskStatus source. */
        public source: mesos.TaskStatus.Source;

        /** TaskStatus reason. */
        public reason: mesos.TaskStatus.Reason;

        /** TaskStatus data. */
        public data: Uint8Array;

        /** TaskStatus agentId. */
        public agentId?: (mesos.IAgentID|null);

        /** TaskStatus executorId. */
        public executorId?: (mesos.IExecutorID|null);

        /** TaskStatus timestamp. */
        public timestamp: number;

        /** TaskStatus uuid. */
        public uuid: Uint8Array;

        /** TaskStatus healthy. */
        public healthy: boolean;

        /** TaskStatus checkStatus. */
        public checkStatus?: (mesos.ICheckStatusInfo|null);

        /** TaskStatus labels. */
        public labels?: (mesos.ILabels|null);

        /** TaskStatus containerStatus. */
        public containerStatus?: (mesos.IContainerStatus|null);

        /** TaskStatus unreachableTime. */
        public unreachableTime?: (mesos.ITimeInfo|null);

        /**
         * Creates a new TaskStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TaskStatus instance
         */
        public static create(properties?: mesos.ITaskStatus): mesos.TaskStatus;

        /**
         * Encodes the specified TaskStatus message. Does not implicitly {@link mesos.TaskStatus.verify|verify} messages.
         * @param message TaskStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TaskStatus message, length delimited. Does not implicitly {@link mesos.TaskStatus.verify|verify} messages.
         * @param message TaskStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITaskStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TaskStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TaskStatus;

        /**
         * Decodes a TaskStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TaskStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TaskStatus;

        /**
         * Verifies a TaskStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TaskStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TaskStatus
         */
        public static fromObject(object: { [k: string]: any }): mesos.TaskStatus;

        /**
         * Creates a plain object from a TaskStatus message. Also converts values to other types if specified.
         * @param message TaskStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.TaskStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TaskStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace TaskStatus {

        /** Source enum. */
        enum Source {
            SOURCE_MASTER = 0,
            SOURCE_AGENT = 1,
            SOURCE_EXECUTOR = 2
        }

        /** Reason enum. */
        enum Reason {
            REASON_COMMAND_EXECUTOR_FAILED = 0,
            REASON_CONTAINER_LAUNCH_FAILED = 21,
            REASON_CONTAINER_LIMITATION = 19,
            REASON_CONTAINER_LIMITATION_DISK = 20,
            REASON_CONTAINER_LIMITATION_MEMORY = 8,
            REASON_CONTAINER_PREEMPTED = 17,
            REASON_CONTAINER_UPDATE_FAILED = 22,
            REASON_EXECUTOR_REGISTRATION_TIMEOUT = 23,
            REASON_EXECUTOR_REREGISTRATION_TIMEOUT = 24,
            REASON_EXECUTOR_TERMINATED = 1,
            REASON_EXECUTOR_UNREGISTERED = 2,
            REASON_FRAMEWORK_REMOVED = 3,
            REASON_GC_ERROR = 4,
            REASON_INVALID_FRAMEWORKID = 5,
            REASON_INVALID_OFFERS = 6,
            REASON_IO_SWITCHBOARD_EXITED = 27,
            REASON_MASTER_DISCONNECTED = 7,
            REASON_RECONCILIATION = 9,
            REASON_RESOURCES_UNKNOWN = 18,
            REASON_AGENT_DISCONNECTED = 10,
            REASON_AGENT_REMOVED = 11,
            REASON_AGENT_RESTARTED = 12,
            REASON_AGENT_UNKNOWN = 13,
            REASON_TASK_CHECK_STATUS_UPDATED = 28,
            REASON_TASK_GROUP_INVALID = 25,
            REASON_TASK_GROUP_UNAUTHORIZED = 26,
            REASON_TASK_INVALID = 14,
            REASON_TASK_UNAUTHORIZED = 15,
            REASON_TASK_UNKNOWN = 16
        }
    }

    /** Properties of a Filters. */
    interface IFilters {

        /** Filters refuseSeconds */
        refuseSeconds?: number;
    }

    /**
     * Describes possible filters that can be applied to unused resources
     * (see SchedulerDriver::launchTasks) to influence the allocator.
     */
    class Filters {

        /**
         * Constructs a new Filters.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IFilters);

        /** Filters refuseSeconds. */
        public refuseSeconds: number;

        /**
         * Creates a new Filters instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Filters instance
         */
        public static create(properties?: mesos.IFilters): mesos.Filters;

        /**
         * Encodes the specified Filters message. Does not implicitly {@link mesos.Filters.verify|verify} messages.
         * @param message Filters message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IFilters, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Filters message, length delimited. Does not implicitly {@link mesos.Filters.verify|verify} messages.
         * @param message Filters message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IFilters, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Filters message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Filters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Filters;

        /**
         * Decodes a Filters message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Filters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Filters;

        /**
         * Verifies a Filters message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Filters message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Filters
         */
        public static fromObject(object: { [k: string]: any }): mesos.Filters;

        /**
         * Creates a plain object from a Filters message. Also converts values to other types if specified.
         * @param message Filters
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Filters, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Filters to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Environment. */
    interface IEnvironment {

        /** Environment variables */
        variables?: mesos.Environment.IVariable[];
    }

    /**
     * Describes a collection of environment variables. This is used with
     * CommandInfo in order to set environment variables before running a
     * command.
     */
    class Environment {

        /**
         * Constructs a new Environment.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IEnvironment);

        /** Environment variables. */
        public variables: mesos.Environment.IVariable[];

        /**
         * Creates a new Environment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Environment instance
         */
        public static create(properties?: mesos.IEnvironment): mesos.Environment;

        /**
         * Encodes the specified Environment message. Does not implicitly {@link mesos.Environment.verify|verify} messages.
         * @param message Environment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Environment message, length delimited. Does not implicitly {@link mesos.Environment.verify|verify} messages.
         * @param message Environment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Environment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Environment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Environment;

        /**
         * Decodes an Environment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Environment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Environment;

        /**
         * Verifies an Environment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Environment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Environment
         */
        public static fromObject(object: { [k: string]: any }): mesos.Environment;

        /**
         * Creates a plain object from an Environment message. Also converts values to other types if specified.
         * @param message Environment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Environment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Environment {

        /** Properties of a Variable. */
        interface IVariable {

            /** Variable name */
            name: string;

            /** Variable value */
            value?: string;
        }

        /** Represents a Variable. */
        class Variable {

            /**
             * Constructs a new Variable.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Environment.IVariable);

            /** Variable name. */
            public name: string;

            /** Variable value. */
            public value: string;

            /**
             * Creates a new Variable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Variable instance
             */
            public static create(properties?: mesos.Environment.IVariable): mesos.Environment.Variable;

            /**
             * Encodes the specified Variable message. Does not implicitly {@link mesos.Environment.Variable.verify|verify} messages.
             * @param message Variable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Environment.IVariable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Variable message, length delimited. Does not implicitly {@link mesos.Environment.Variable.verify|verify} messages.
             * @param message Variable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Environment.IVariable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Variable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Variable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Environment.Variable;

            /**
             * Decodes a Variable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Variable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Environment.Variable;

            /**
             * Verifies a Variable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Variable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Variable
             */
            public static fromObject(object: { [k: string]: any }): mesos.Environment.Variable;

            /**
             * Creates a plain object from a Variable message. Also converts values to other types if specified.
             * @param message Variable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Environment.Variable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Variable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Parameter. */
    interface IParameter {

        /** Parameter key */
        key: string;

        /** Parameter value */
        value: string;
    }

    /** A generic (key, value) pair used in various places for parameters. */
    class Parameter {

        /**
         * Constructs a new Parameter.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IParameter);

        /** Parameter key. */
        public key: string;

        /** Parameter value. */
        public value: string;

        /**
         * Creates a new Parameter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Parameter instance
         */
        public static create(properties?: mesos.IParameter): mesos.Parameter;

        /**
         * Encodes the specified Parameter message. Does not implicitly {@link mesos.Parameter.verify|verify} messages.
         * @param message Parameter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Parameter message, length delimited. Does not implicitly {@link mesos.Parameter.verify|verify} messages.
         * @param message Parameter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Parameter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Parameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Parameter;

        /**
         * Decodes a Parameter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Parameter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Parameter;

        /**
         * Verifies a Parameter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Parameter
         */
        public static fromObject(object: { [k: string]: any }): mesos.Parameter;

        /**
         * Creates a plain object from a Parameter message. Also converts values to other types if specified.
         * @param message Parameter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Parameter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Parameters. */
    interface IParameters {

        /** Parameters parameter */
        parameter?: mesos.IParameter[];
    }

    /** Collection of Parameter. */
    class Parameters {

        /**
         * Constructs a new Parameters.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IParameters);

        /** Parameters parameter. */
        public parameter: mesos.IParameter[];

        /**
         * Creates a new Parameters instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Parameters instance
         */
        public static create(properties?: mesos.IParameters): mesos.Parameters;

        /**
         * Encodes the specified Parameters message. Does not implicitly {@link mesos.Parameters.verify|verify} messages.
         * @param message Parameters message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IParameters, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Parameters message, length delimited. Does not implicitly {@link mesos.Parameters.verify|verify} messages.
         * @param message Parameters message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IParameters, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Parameters message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Parameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Parameters;

        /**
         * Decodes a Parameters message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Parameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Parameters;

        /**
         * Verifies a Parameters message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Parameters message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Parameters
         */
        public static fromObject(object: { [k: string]: any }): mesos.Parameters;

        /**
         * Creates a plain object from a Parameters message. Also converts values to other types if specified.
         * @param message Parameters
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Parameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Parameters to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Credential. */
    interface ICredential {

        /** Credential principal */
        principal: string;

        /** Credential secret */
        secret?: string;
    }

    /**
     * Credential used in various places for authentication and
     * authorization.
     *
     * NOTE: A 'principal' is different from 'FrameworkInfo.user'. The
     * former is used for authentication and authorization while the
     * latter is used to determine the default user under which the
     * framework's executors/tasks are run.
     */
    class Credential {

        /**
         * Constructs a new Credential.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ICredential);

        /** Credential principal. */
        public principal: string;

        /** Credential secret. */
        public secret: string;

        /**
         * Creates a new Credential instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Credential instance
         */
        public static create(properties?: mesos.ICredential): mesos.Credential;

        /**
         * Encodes the specified Credential message. Does not implicitly {@link mesos.Credential.verify|verify} messages.
         * @param message Credential message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ICredential, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Credential message, length delimited. Does not implicitly {@link mesos.Credential.verify|verify} messages.
         * @param message Credential message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ICredential, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Credential message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Credential
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Credential;

        /**
         * Decodes a Credential message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Credential
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Credential;

        /**
         * Verifies a Credential message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Credential message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Credential
         */
        public static fromObject(object: { [k: string]: any }): mesos.Credential;

        /**
         * Creates a plain object from a Credential message. Also converts values to other types if specified.
         * @param message Credential
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Credential, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Credential to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Credentials. */
    interface ICredentials {

        /** Credentials credentials */
        credentials?: mesos.ICredential[];
    }

    /**
     * Credentials used for framework authentication, HTTP authentication
     * (where the common 'username' and 'password' are captured as
     * 'principal' and 'secret' respectively), etc.
     */
    class Credentials {

        /**
         * Constructs a new Credentials.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ICredentials);

        /** Credentials credentials. */
        public credentials: mesos.ICredential[];

        /**
         * Creates a new Credentials instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Credentials instance
         */
        public static create(properties?: mesos.ICredentials): mesos.Credentials;

        /**
         * Encodes the specified Credentials message. Does not implicitly {@link mesos.Credentials.verify|verify} messages.
         * @param message Credentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Credentials message, length delimited. Does not implicitly {@link mesos.Credentials.verify|verify} messages.
         * @param message Credentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ICredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Credentials message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Credentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Credentials;

        /**
         * Decodes a Credentials message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Credentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Credentials;

        /**
         * Verifies a Credentials message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Credentials message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Credentials
         */
        public static fromObject(object: { [k: string]: any }): mesos.Credentials;

        /**
         * Creates a plain object from a Credentials message. Also converts values to other types if specified.
         * @param message Credentials
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Credentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Credentials to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RateLimit. */
    interface IRateLimit {

        /** RateLimit qps */
        qps?: number;

        /** RateLimit principal */
        principal: string;

        /** RateLimit capacity */
        capacity?: number;
    }

    /**
     * Rate (queries per second, QPS) limit for messages from a framework to master.
     * Strictly speaking they are the combined rate from all frameworks of the same
     * principal.
     */
    class RateLimit {

        /**
         * Constructs a new RateLimit.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IRateLimit);

        /** RateLimit qps. */
        public qps: number;

        /** RateLimit principal. */
        public principal: string;

        /** RateLimit capacity. */
        public capacity: number;

        /**
         * Creates a new RateLimit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RateLimit instance
         */
        public static create(properties?: mesos.IRateLimit): mesos.RateLimit;

        /**
         * Encodes the specified RateLimit message. Does not implicitly {@link mesos.RateLimit.verify|verify} messages.
         * @param message RateLimit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IRateLimit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RateLimit message, length delimited. Does not implicitly {@link mesos.RateLimit.verify|verify} messages.
         * @param message RateLimit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IRateLimit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RateLimit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RateLimit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.RateLimit;

        /**
         * Decodes a RateLimit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RateLimit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.RateLimit;

        /**
         * Verifies a RateLimit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RateLimit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RateLimit
         */
        public static fromObject(object: { [k: string]: any }): mesos.RateLimit;

        /**
         * Creates a plain object from a RateLimit message. Also converts values to other types if specified.
         * @param message RateLimit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.RateLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RateLimit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RateLimits. */
    interface IRateLimits {

        /** RateLimits limits */
        limits?: mesos.IRateLimit[];

        /** RateLimits aggregateDefaultQps */
        aggregateDefaultQps?: number;

        /** RateLimits aggregateDefaultCapacity */
        aggregateDefaultCapacity?: number;
    }

    /**
     * Collection of RateLimit.
     * Frameworks without rate limits defined here are not throttled unless
     * 'aggregate_default_qps' is specified.
     */
    class RateLimits {

        /**
         * Constructs a new RateLimits.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IRateLimits);

        /** RateLimits limits. */
        public limits: mesos.IRateLimit[];

        /** RateLimits aggregateDefaultQps. */
        public aggregateDefaultQps: number;

        /** RateLimits aggregateDefaultCapacity. */
        public aggregateDefaultCapacity: number;

        /**
         * Creates a new RateLimits instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RateLimits instance
         */
        public static create(properties?: mesos.IRateLimits): mesos.RateLimits;

        /**
         * Encodes the specified RateLimits message. Does not implicitly {@link mesos.RateLimits.verify|verify} messages.
         * @param message RateLimits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RateLimits message, length delimited. Does not implicitly {@link mesos.RateLimits.verify|verify} messages.
         * @param message RateLimits message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IRateLimits, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RateLimits message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RateLimits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.RateLimits;

        /**
         * Decodes a RateLimits message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RateLimits
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.RateLimits;

        /**
         * Verifies a RateLimits message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RateLimits message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RateLimits
         */
        public static fromObject(object: { [k: string]: any }): mesos.RateLimits;

        /**
         * Creates a plain object from a RateLimits message. Also converts values to other types if specified.
         * @param message RateLimits
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.RateLimits, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RateLimits to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Image. */
    interface IImage {

        /** Image type */
        type: mesos.Image.Type;

        /** Image appc */
        appc?: mesos.Image.IAppc;

        /** Image docker */
        docker?: mesos.Image.IDocker;

        /** Image cached */
        cached?: boolean;
    }

    /**
     * Describe an image used by tasks or executors. Note that it's only
     * for tasks or executors launched by MesosContainerizer currently.
     */
    class Image {

        /**
         * Constructs a new Image.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IImage);

        /** Image type. */
        public type: mesos.Image.Type;

        /** Image appc. */
        public appc?: (mesos.Image.IAppc|null);

        /** Image docker. */
        public docker?: (mesos.Image.IDocker|null);

        /** Image cached. */
        public cached: boolean;

        /**
         * Creates a new Image instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Image instance
         */
        public static create(properties?: mesos.IImage): mesos.Image;

        /**
         * Encodes the specified Image message. Does not implicitly {@link mesos.Image.verify|verify} messages.
         * @param message Image message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Image message, length delimited. Does not implicitly {@link mesos.Image.verify|verify} messages.
         * @param message Image message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Image;

        /**
         * Decodes an Image message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Image;

        /**
         * Verifies an Image message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Image message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Image
         */
        public static fromObject(object: { [k: string]: any }): mesos.Image;

        /**
         * Creates a plain object from an Image message. Also converts values to other types if specified.
         * @param message Image
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Image to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Image {

        /** Type enum. */
        enum Type {
            APPC = 1,
            DOCKER = 2
        }

        /** Properties of an Appc. */
        interface IAppc {

            /** Appc name */
            name: string;

            /** Appc id */
            id?: string;

            /** Appc labels */
            labels?: mesos.ILabels;
        }

        /** Represents an Appc. */
        class Appc {

            /**
             * Constructs a new Appc.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Image.IAppc);

            /** Appc name. */
            public name: string;

            /** Appc id. */
            public id: string;

            /** Appc labels. */
            public labels?: (mesos.ILabels|null);

            /**
             * Creates a new Appc instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Appc instance
             */
            public static create(properties?: mesos.Image.IAppc): mesos.Image.Appc;

            /**
             * Encodes the specified Appc message. Does not implicitly {@link mesos.Image.Appc.verify|verify} messages.
             * @param message Appc message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Image.IAppc, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Appc message, length delimited. Does not implicitly {@link mesos.Image.Appc.verify|verify} messages.
             * @param message Appc message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Image.IAppc, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Appc message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Appc
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Image.Appc;

            /**
             * Decodes an Appc message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Appc
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Image.Appc;

            /**
             * Verifies an Appc message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Appc message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Appc
             */
            public static fromObject(object: { [k: string]: any }): mesos.Image.Appc;

            /**
             * Creates a plain object from an Appc message. Also converts values to other types if specified.
             * @param message Appc
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Image.Appc, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Appc to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Docker. */
        interface IDocker {

            /** Docker name */
            name: string;

            /** Docker credential */
            credential?: mesos.ICredential;
        }

        /** Represents a Docker. */
        class Docker {

            /**
             * Constructs a new Docker.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Image.IDocker);

            /** Docker name. */
            public name: string;

            /** Docker credential. */
            public credential?: (mesos.ICredential|null);

            /**
             * Creates a new Docker instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Docker instance
             */
            public static create(properties?: mesos.Image.IDocker): mesos.Image.Docker;

            /**
             * Encodes the specified Docker message. Does not implicitly {@link mesos.Image.Docker.verify|verify} messages.
             * @param message Docker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Image.IDocker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Docker message, length delimited. Does not implicitly {@link mesos.Image.Docker.verify|verify} messages.
             * @param message Docker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Image.IDocker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Docker message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Docker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Image.Docker;

            /**
             * Decodes a Docker message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Docker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Image.Docker;

            /**
             * Verifies a Docker message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Docker message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Docker
             */
            public static fromObject(object: { [k: string]: any }): mesos.Image.Docker;

            /**
             * Creates a plain object from a Docker message. Also converts values to other types if specified.
             * @param message Docker
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Image.Docker, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Docker to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Volume. */
    interface IVolume {

        /** Volume mode */
        mode: mesos.Volume.Mode;

        /** Volume containerPath */
        containerPath: string;

        /** Volume hostPath */
        hostPath?: string;

        /** Volume image */
        image?: mesos.IImage;

        /** Volume source */
        source?: mesos.Volume.ISource;
    }

    /**
     * Describes a volume mapping either from host to container or vice
     * versa. Both paths can either refer to a directory or a file.
     */
    class Volume {

        /**
         * Constructs a new Volume.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IVolume);

        /** Volume mode. */
        public mode: mesos.Volume.Mode;

        /** Volume containerPath. */
        public containerPath: string;

        /** Volume hostPath. */
        public hostPath: string;

        /** Volume image. */
        public image?: (mesos.IImage|null);

        /** Volume source. */
        public source?: (mesos.Volume.ISource|null);

        /**
         * Creates a new Volume instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Volume instance
         */
        public static create(properties?: mesos.IVolume): mesos.Volume;

        /**
         * Encodes the specified Volume message. Does not implicitly {@link mesos.Volume.verify|verify} messages.
         * @param message Volume message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Volume message, length delimited. Does not implicitly {@link mesos.Volume.verify|verify} messages.
         * @param message Volume message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IVolume, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Volume message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Volume
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Volume;

        /**
         * Decodes a Volume message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Volume
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Volume;

        /**
         * Verifies a Volume message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Volume message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Volume
         */
        public static fromObject(object: { [k: string]: any }): mesos.Volume;

        /**
         * Creates a plain object from a Volume message. Also converts values to other types if specified.
         * @param message Volume
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Volume, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Volume to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Volume {

        /** Mode enum. */
        enum Mode {
            RW = 1,
            RO = 2
        }

        /** Properties of a Source. */
        interface ISource {

            /** Source type */
            type?: mesos.Volume.Source.Type;

            /** Source dockerVolume */
            dockerVolume?: mesos.Volume.Source.IDockerVolume;

            /** Source sandboxPath */
            sandboxPath?: mesos.Volume.Source.ISandboxPath;
        }

        /** Represents a Source. */
        class Source {

            /**
             * Constructs a new Source.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.Volume.ISource);

            /** Source type. */
            public type: mesos.Volume.Source.Type;

            /** Source dockerVolume. */
            public dockerVolume?: (mesos.Volume.Source.IDockerVolume|null);

            /** Source sandboxPath. */
            public sandboxPath?: (mesos.Volume.Source.ISandboxPath|null);

            /**
             * Creates a new Source instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Source instance
             */
            public static create(properties?: mesos.Volume.ISource): mesos.Volume.Source;

            /**
             * Encodes the specified Source message. Does not implicitly {@link mesos.Volume.Source.verify|verify} messages.
             * @param message Source message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.Volume.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Source message, length delimited. Does not implicitly {@link mesos.Volume.Source.verify|verify} messages.
             * @param message Source message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.Volume.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Source message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Source
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Volume.Source;

            /**
             * Decodes a Source message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Source
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Volume.Source;

            /**
             * Verifies a Source message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Source message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Source
             */
            public static fromObject(object: { [k: string]: any }): mesos.Volume.Source;

            /**
             * Creates a plain object from a Source message. Also converts values to other types if specified.
             * @param message Source
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.Volume.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Source to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Source {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                DOCKER_VOLUME = 1,
                SANDBOX_PATH = 2
            }

            /** Properties of a DockerVolume. */
            interface IDockerVolume {

                /** DockerVolume driver */
                driver?: string;

                /** DockerVolume name */
                name: string;

                /** DockerVolume driverOptions */
                driverOptions?: mesos.IParameters;
            }

            /** Represents a DockerVolume. */
            class DockerVolume {

                /**
                 * Constructs a new DockerVolume.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Volume.Source.IDockerVolume);

                /** DockerVolume driver. */
                public driver: string;

                /** DockerVolume name. */
                public name: string;

                /** DockerVolume driverOptions. */
                public driverOptions?: (mesos.IParameters|null);

                /**
                 * Creates a new DockerVolume instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DockerVolume instance
                 */
                public static create(properties?: mesos.Volume.Source.IDockerVolume): mesos.Volume.Source.DockerVolume;

                /**
                 * Encodes the specified DockerVolume message. Does not implicitly {@link mesos.Volume.Source.DockerVolume.verify|verify} messages.
                 * @param message DockerVolume message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Volume.Source.IDockerVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DockerVolume message, length delimited. Does not implicitly {@link mesos.Volume.Source.DockerVolume.verify|verify} messages.
                 * @param message DockerVolume message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Volume.Source.IDockerVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DockerVolume message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DockerVolume
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Volume.Source.DockerVolume;

                /**
                 * Decodes a DockerVolume message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DockerVolume
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Volume.Source.DockerVolume;

                /**
                 * Verifies a DockerVolume message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DockerVolume message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DockerVolume
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Volume.Source.DockerVolume;

                /**
                 * Creates a plain object from a DockerVolume message. Also converts values to other types if specified.
                 * @param message DockerVolume
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Volume.Source.DockerVolume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DockerVolume to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SandboxPath. */
            interface ISandboxPath {

                /** SandboxPath type */
                type?: mesos.Volume.Source.SandboxPath.Type;

                /** SandboxPath path */
                path: string;
            }

            /** Represents a SandboxPath. */
            class SandboxPath {

                /**
                 * Constructs a new SandboxPath.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.Volume.Source.ISandboxPath);

                /** SandboxPath type. */
                public type: mesos.Volume.Source.SandboxPath.Type;

                /** SandboxPath path. */
                public path: string;

                /**
                 * Creates a new SandboxPath instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SandboxPath instance
                 */
                public static create(properties?: mesos.Volume.Source.ISandboxPath): mesos.Volume.Source.SandboxPath;

                /**
                 * Encodes the specified SandboxPath message. Does not implicitly {@link mesos.Volume.Source.SandboxPath.verify|verify} messages.
                 * @param message SandboxPath message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.Volume.Source.ISandboxPath, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SandboxPath message, length delimited. Does not implicitly {@link mesos.Volume.Source.SandboxPath.verify|verify} messages.
                 * @param message SandboxPath message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.Volume.Source.ISandboxPath, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SandboxPath message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SandboxPath
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Volume.Source.SandboxPath;

                /**
                 * Decodes a SandboxPath message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SandboxPath
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Volume.Source.SandboxPath;

                /**
                 * Verifies a SandboxPath message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SandboxPath message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SandboxPath
                 */
                public static fromObject(object: { [k: string]: any }): mesos.Volume.Source.SandboxPath;

                /**
                 * Creates a plain object from a SandboxPath message. Also converts values to other types if specified.
                 * @param message SandboxPath
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.Volume.Source.SandboxPath, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SandboxPath to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace SandboxPath {

                /** Type enum. */
                enum Type {
                    UNKNOWN = 0,
                    SELF = 1,
                    PARENT = 2
                }
            }
        }
    }

    /** Properties of a NetworkInfo. */
    interface INetworkInfo {

        /** NetworkInfo ipAddresses */
        ipAddresses?: mesos.NetworkInfo.IIPAddress[];

        /** NetworkInfo name */
        name?: string;

        /** NetworkInfo groups */
        groups?: string[];

        /** NetworkInfo labels */
        labels?: mesos.ILabels;

        /** NetworkInfo portMappings */
        portMappings?: mesos.NetworkInfo.IPortMapping[];
    }

    /**
     * Describes a network request from a framework as well as network resolution
     * provided by Mesos.
     *
     * A framework may request the network isolator on the Agent to isolate the
     * container in a network namespace and create a virtual network interface.
     * The `NetworkInfo` message describes the properties of that virtual
     * interface, including the IP addresses and network isolation policy
     * (network group membership).
     *
     * The NetworkInfo message is not interpreted by the Master or Agent and is
     * intended to be used by Agent and Master modules implementing network
     * isolation. If the modules are missing, the message is simply ignored. In
     * future, the task launch will fail if there is no module providing the
     * network isolation capabilities (MESOS-3390).
     *
     * An executor, Agent, or an Agent module may append NetworkInfos inside
     * TaskStatus::container_status to provide information such as the container IP
     * address and isolation groups.
     */
    class NetworkInfo {

        /**
         * Constructs a new NetworkInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.INetworkInfo);

        /** NetworkInfo ipAddresses. */
        public ipAddresses: mesos.NetworkInfo.IIPAddress[];

        /** NetworkInfo name. */
        public name: string;

        /** NetworkInfo groups. */
        public groups: string[];

        /** NetworkInfo labels. */
        public labels?: (mesos.ILabels|null);

        /** NetworkInfo portMappings. */
        public portMappings: mesos.NetworkInfo.IPortMapping[];

        /**
         * Creates a new NetworkInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NetworkInfo instance
         */
        public static create(properties?: mesos.INetworkInfo): mesos.NetworkInfo;

        /**
         * Encodes the specified NetworkInfo message. Does not implicitly {@link mesos.NetworkInfo.verify|verify} messages.
         * @param message NetworkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NetworkInfo message, length delimited. Does not implicitly {@link mesos.NetworkInfo.verify|verify} messages.
         * @param message NetworkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetworkInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetworkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.NetworkInfo;

        /**
         * Decodes a NetworkInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NetworkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.NetworkInfo;

        /**
         * Verifies a NetworkInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NetworkInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetworkInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.NetworkInfo;

        /**
         * Creates a plain object from a NetworkInfo message. Also converts values to other types if specified.
         * @param message NetworkInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.NetworkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetworkInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace NetworkInfo {

        /** Protocol enum. */
        enum Protocol {
            IPv4 = 1,
            IPv6 = 2
        }

        /** Properties of a IPAddress. */
        interface IIPAddress {

            /** IPAddress protocol */
            protocol?: mesos.NetworkInfo.Protocol;

            /** IPAddress ipAddress */
            ipAddress?: string;
        }

        /** Represents a IPAddress. */
        class IPAddress {

            /**
             * Constructs a new IPAddress.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.NetworkInfo.IIPAddress);

            /** IPAddress protocol. */
            public protocol: mesos.NetworkInfo.Protocol;

            /** IPAddress ipAddress. */
            public ipAddress: string;

            /**
             * Creates a new IPAddress instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IPAddress instance
             */
            public static create(properties?: mesos.NetworkInfo.IIPAddress): mesos.NetworkInfo.IPAddress;

            /**
             * Encodes the specified IPAddress message. Does not implicitly {@link mesos.NetworkInfo.IPAddress.verify|verify} messages.
             * @param message IPAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.NetworkInfo.IIPAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IPAddress message, length delimited. Does not implicitly {@link mesos.NetworkInfo.IPAddress.verify|verify} messages.
             * @param message IPAddress message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.NetworkInfo.IIPAddress, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IPAddress message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IPAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.NetworkInfo.IPAddress;

            /**
             * Decodes a IPAddress message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IPAddress
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.NetworkInfo.IPAddress;

            /**
             * Verifies a IPAddress message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a IPAddress message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IPAddress
             */
            public static fromObject(object: { [k: string]: any }): mesos.NetworkInfo.IPAddress;

            /**
             * Creates a plain object from a IPAddress message. Also converts values to other types if specified.
             * @param message IPAddress
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.NetworkInfo.IPAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IPAddress to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PortMapping. */
        interface IPortMapping {

            /** PortMapping hostPort */
            hostPort: number;

            /** PortMapping containerPort */
            containerPort: number;

            /** PortMapping protocol */
            protocol?: string;
        }

        /** Represents a PortMapping. */
        class PortMapping {

            /**
             * Constructs a new PortMapping.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.NetworkInfo.IPortMapping);

            /** PortMapping hostPort. */
            public hostPort: number;

            /** PortMapping containerPort. */
            public containerPort: number;

            /** PortMapping protocol. */
            public protocol: string;

            /**
             * Creates a new PortMapping instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PortMapping instance
             */
            public static create(properties?: mesos.NetworkInfo.IPortMapping): mesos.NetworkInfo.PortMapping;

            /**
             * Encodes the specified PortMapping message. Does not implicitly {@link mesos.NetworkInfo.PortMapping.verify|verify} messages.
             * @param message PortMapping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.NetworkInfo.IPortMapping, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PortMapping message, length delimited. Does not implicitly {@link mesos.NetworkInfo.PortMapping.verify|verify} messages.
             * @param message PortMapping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.NetworkInfo.IPortMapping, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PortMapping message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PortMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.NetworkInfo.PortMapping;

            /**
             * Decodes a PortMapping message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PortMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.NetworkInfo.PortMapping;

            /**
             * Verifies a PortMapping message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PortMapping message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PortMapping
             */
            public static fromObject(object: { [k: string]: any }): mesos.NetworkInfo.PortMapping;

            /**
             * Creates a plain object from a PortMapping message. Also converts values to other types if specified.
             * @param message PortMapping
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.NetworkInfo.PortMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PortMapping to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a CapabilityInfo. */
    interface ICapabilityInfo {

        /** CapabilityInfo capabilities */
        capabilities?: mesos.CapabilityInfo.Capability[];
    }

    /**
     * Encapsulation of `Capabilities` supported by Linux.
     * Reference: http://linux.die.net/man/7/capabilities.
     */
    class CapabilityInfo {

        /**
         * Constructs a new CapabilityInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ICapabilityInfo);

        /** CapabilityInfo capabilities. */
        public capabilities: mesos.CapabilityInfo.Capability[];

        /**
         * Creates a new CapabilityInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CapabilityInfo instance
         */
        public static create(properties?: mesos.ICapabilityInfo): mesos.CapabilityInfo;

        /**
         * Encodes the specified CapabilityInfo message. Does not implicitly {@link mesos.CapabilityInfo.verify|verify} messages.
         * @param message CapabilityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ICapabilityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CapabilityInfo message, length delimited. Does not implicitly {@link mesos.CapabilityInfo.verify|verify} messages.
         * @param message CapabilityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ICapabilityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CapabilityInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CapabilityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CapabilityInfo;

        /**
         * Decodes a CapabilityInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CapabilityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CapabilityInfo;

        /**
         * Verifies a CapabilityInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CapabilityInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CapabilityInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.CapabilityInfo;

        /**
         * Creates a plain object from a CapabilityInfo message. Also converts values to other types if specified.
         * @param message CapabilityInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.CapabilityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CapabilityInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CapabilityInfo {

        /** Capability enum. */
        enum Capability {
            UNKNOWN = 0,
            CHOWN = 1000,
            DAC_OVERRIDE = 1001,
            DAC_READ_SEARCH = 1002,
            FOWNER = 1003,
            FSETID = 1004,
            KILL = 1005,
            SETGID = 1006,
            SETUID = 1007,
            SETPCAP = 1008,
            LINUX_IMMUTABLE = 1009,
            NET_BIND_SERVICE = 1010,
            NET_BROADCAST = 1011,
            NET_ADMIN = 1012,
            NET_RAW = 1013,
            IPC_LOCK = 1014,
            IPC_OWNER = 1015,
            SYS_MODULE = 1016,
            SYS_RAWIO = 1017,
            SYS_CHROOT = 1018,
            SYS_PTRACE = 1019,
            SYS_PACCT = 1020,
            SYS_ADMIN = 1021,
            SYS_BOOT = 1022,
            SYS_NICE = 1023,
            SYS_RESOURCE = 1024,
            SYS_TIME = 1025,
            SYS_TTY_CONFIG = 1026,
            MKNOD = 1027,
            LEASE = 1028,
            AUDIT_WRITE = 1029,
            AUDIT_CONTROL = 1030,
            SETFCAP = 1031,
            MAC_OVERRIDE = 1032,
            MAC_ADMIN = 1033,
            SYSLOG = 1034,
            WAKE_ALARM = 1035,
            BLOCK_SUSPEND = 1036,
            AUDIT_READ = 1037
        }
    }

    /** Properties of a LinuxInfo. */
    interface ILinuxInfo {

        /** LinuxInfo capabilityInfo */
        capabilityInfo?: mesos.ICapabilityInfo;
    }

    /**
     * Encapsulation for Linux specific configuration.
     * E.g, capabilities, limits etc.
     */
    class LinuxInfo {

        /**
         * Constructs a new LinuxInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ILinuxInfo);

        /** LinuxInfo capabilityInfo. */
        public capabilityInfo?: (mesos.ICapabilityInfo|null);

        /**
         * Creates a new LinuxInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LinuxInfo instance
         */
        public static create(properties?: mesos.ILinuxInfo): mesos.LinuxInfo;

        /**
         * Encodes the specified LinuxInfo message. Does not implicitly {@link mesos.LinuxInfo.verify|verify} messages.
         * @param message LinuxInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ILinuxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LinuxInfo message, length delimited. Does not implicitly {@link mesos.LinuxInfo.verify|verify} messages.
         * @param message LinuxInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ILinuxInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LinuxInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LinuxInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.LinuxInfo;

        /**
         * Decodes a LinuxInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LinuxInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.LinuxInfo;

        /**
         * Verifies a LinuxInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LinuxInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LinuxInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.LinuxInfo;

        /**
         * Creates a plain object from a LinuxInfo message. Also converts values to other types if specified.
         * @param message LinuxInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.LinuxInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LinuxInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RLimitInfo. */
    interface IRLimitInfo {

        /** RLimitInfo rlimits */
        rlimits?: mesos.RLimitInfo.IRLimit[];
    }

    /**
     * Encapsulation for POSIX rlimits, see
     * http://pubs.opengroup.org/onlinepubs/009695399/functions/getrlimit.html.
     * Note that some types might only be defined for Linux.
     * We use a custom prefix to avoid conflict with existing system macros
     * (e.g., `RLIMIT_CPU` or `NOFILE`).
     */
    class RLimitInfo {

        /**
         * Constructs a new RLimitInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IRLimitInfo);

        /** RLimitInfo rlimits. */
        public rlimits: mesos.RLimitInfo.IRLimit[];

        /**
         * Creates a new RLimitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RLimitInfo instance
         */
        public static create(properties?: mesos.IRLimitInfo): mesos.RLimitInfo;

        /**
         * Encodes the specified RLimitInfo message. Does not implicitly {@link mesos.RLimitInfo.verify|verify} messages.
         * @param message RLimitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IRLimitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RLimitInfo message, length delimited. Does not implicitly {@link mesos.RLimitInfo.verify|verify} messages.
         * @param message RLimitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IRLimitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RLimitInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RLimitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.RLimitInfo;

        /**
         * Decodes a RLimitInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RLimitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.RLimitInfo;

        /**
         * Verifies a RLimitInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RLimitInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RLimitInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.RLimitInfo;

        /**
         * Creates a plain object from a RLimitInfo message. Also converts values to other types if specified.
         * @param message RLimitInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.RLimitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RLimitInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace RLimitInfo {

        /** Properties of a RLimit. */
        interface IRLimit {

            /** RLimit type */
            type?: mesos.RLimitInfo.RLimit.Type;

            /** RLimit hard */
            hard?: number;

            /** RLimit soft */
            soft?: number;
        }

        /** Represents a RLimit. */
        class RLimit {

            /**
             * Constructs a new RLimit.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.RLimitInfo.IRLimit);

            /** RLimit type. */
            public type: mesos.RLimitInfo.RLimit.Type;

            /** RLimit hard. */
            public hard: number;

            /** RLimit soft. */
            public soft: number;

            /**
             * Creates a new RLimit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RLimit instance
             */
            public static create(properties?: mesos.RLimitInfo.IRLimit): mesos.RLimitInfo.RLimit;

            /**
             * Encodes the specified RLimit message. Does not implicitly {@link mesos.RLimitInfo.RLimit.verify|verify} messages.
             * @param message RLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.RLimitInfo.IRLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RLimit message, length delimited. Does not implicitly {@link mesos.RLimitInfo.RLimit.verify|verify} messages.
             * @param message RLimit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.RLimitInfo.IRLimit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RLimit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.RLimitInfo.RLimit;

            /**
             * Decodes a RLimit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RLimit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.RLimitInfo.RLimit;

            /**
             * Verifies a RLimit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RLimit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RLimit
             */
            public static fromObject(object: { [k: string]: any }): mesos.RLimitInfo.RLimit;

            /**
             * Creates a plain object from a RLimit message. Also converts values to other types if specified.
             * @param message RLimit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.RLimitInfo.RLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RLimit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace RLimit {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                RLMT_AS = 1,
                RLMT_CORE = 2,
                RLMT_CPU = 3,
                RLMT_DATA = 4,
                RLMT_FSIZE = 5,
                RLMT_LOCKS = 6,
                RLMT_MEMLOCK = 7,
                RLMT_MSGQUEUE = 8,
                RLMT_NICE = 9,
                RLMT_NOFILE = 10,
                RLMT_NPROC = 11,
                RLMT_RSS = 12,
                RLMT_RTPRIO = 13,
                RLMT_RTTIME = 14,
                RLMT_SIGPENDING = 15,
                RLMT_STACK = 16
            }
        }
    }

    /** Properties of a TTYInfo. */
    interface ITTYInfo {

        /** TTYInfo windowSize */
        windowSize?: mesos.TTYInfo.IWindowSize;
    }

    /**
     * Describes the information about (pseudo) TTY that can
     * be attached to a process running in a container.
     */
    class TTYInfo {

        /**
         * Constructs a new TTYInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ITTYInfo);

        /** TTYInfo windowSize. */
        public windowSize?: (mesos.TTYInfo.IWindowSize|null);

        /**
         * Creates a new TTYInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TTYInfo instance
         */
        public static create(properties?: mesos.ITTYInfo): mesos.TTYInfo;

        /**
         * Encodes the specified TTYInfo message. Does not implicitly {@link mesos.TTYInfo.verify|verify} messages.
         * @param message TTYInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ITTYInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TTYInfo message, length delimited. Does not implicitly {@link mesos.TTYInfo.verify|verify} messages.
         * @param message TTYInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ITTYInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TTYInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TTYInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TTYInfo;

        /**
         * Decodes a TTYInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TTYInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TTYInfo;

        /**
         * Verifies a TTYInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TTYInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TTYInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.TTYInfo;

        /**
         * Creates a plain object from a TTYInfo message. Also converts values to other types if specified.
         * @param message TTYInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.TTYInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TTYInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace TTYInfo {

        /** Properties of a WindowSize. */
        interface IWindowSize {

            /** WindowSize rows */
            rows: number;

            /** WindowSize columns */
            columns: number;
        }

        /** Represents a WindowSize. */
        class WindowSize {

            /**
             * Constructs a new WindowSize.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.TTYInfo.IWindowSize);

            /** WindowSize rows. */
            public rows: number;

            /** WindowSize columns. */
            public columns: number;

            /**
             * Creates a new WindowSize instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WindowSize instance
             */
            public static create(properties?: mesos.TTYInfo.IWindowSize): mesos.TTYInfo.WindowSize;

            /**
             * Encodes the specified WindowSize message. Does not implicitly {@link mesos.TTYInfo.WindowSize.verify|verify} messages.
             * @param message WindowSize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.TTYInfo.IWindowSize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WindowSize message, length delimited. Does not implicitly {@link mesos.TTYInfo.WindowSize.verify|verify} messages.
             * @param message WindowSize message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.TTYInfo.IWindowSize, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WindowSize message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WindowSize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.TTYInfo.WindowSize;

            /**
             * Decodes a WindowSize message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WindowSize
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.TTYInfo.WindowSize;

            /**
             * Verifies a WindowSize message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WindowSize message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WindowSize
             */
            public static fromObject(object: { [k: string]: any }): mesos.TTYInfo.WindowSize;

            /**
             * Creates a plain object from a WindowSize message. Also converts values to other types if specified.
             * @param message WindowSize
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.TTYInfo.WindowSize, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WindowSize to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ContainerInfo. */
    interface IContainerInfo {

        /** ContainerInfo type */
        type: mesos.ContainerInfo.Type;

        /** ContainerInfo volumes */
        volumes?: mesos.IVolume[];

        /** ContainerInfo hostname */
        hostname?: string;

        /** ContainerInfo docker */
        docker?: mesos.ContainerInfo.IDockerInfo;

        /** ContainerInfo mesos */
        mesos?: mesos.ContainerInfo.IMesosInfo;

        /** ContainerInfo networkInfos */
        networkInfos?: mesos.INetworkInfo[];

        /** ContainerInfo linuxInfo */
        linuxInfo?: mesos.ILinuxInfo;

        /** ContainerInfo rlimitInfo */
        rlimitInfo?: mesos.IRLimitInfo;

        /** ContainerInfo ttyInfo */
        ttyInfo?: mesos.ITTYInfo;
    }

    /**
     * Describes a container configuration and allows extensible
     * configurations for different container implementations.
     *
     * NOTE: `ContainerInfo` may be specified, e.g., by a task, even if no
     * container image is provided. In this case neither `MesosInfo` nor
     * `DockerInfo` is set, the required `type` must be `MESOS`. This is to
     * address a case when a task without an image, e.g., a shell script
     * with URIs, wants to use features originally designed for containers,
     * for example custom network isolation via `NetworkInfo`.
     */
    class ContainerInfo {

        /**
         * Constructs a new ContainerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IContainerInfo);

        /** ContainerInfo type. */
        public type: mesos.ContainerInfo.Type;

        /** ContainerInfo volumes. */
        public volumes: mesos.IVolume[];

        /** ContainerInfo hostname. */
        public hostname: string;

        /** ContainerInfo docker. */
        public docker?: (mesos.ContainerInfo.IDockerInfo|null);

        /** ContainerInfo mesos. */
        public mesos?: (mesos.ContainerInfo.IMesosInfo|null);

        /** ContainerInfo networkInfos. */
        public networkInfos: mesos.INetworkInfo[];

        /** ContainerInfo linuxInfo. */
        public linuxInfo?: (mesos.ILinuxInfo|null);

        /** ContainerInfo rlimitInfo. */
        public rlimitInfo?: (mesos.IRLimitInfo|null);

        /** ContainerInfo ttyInfo. */
        public ttyInfo?: (mesos.ITTYInfo|null);

        /**
         * Creates a new ContainerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainerInfo instance
         */
        public static create(properties?: mesos.IContainerInfo): mesos.ContainerInfo;

        /**
         * Encodes the specified ContainerInfo message. Does not implicitly {@link mesos.ContainerInfo.verify|verify} messages.
         * @param message ContainerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IContainerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainerInfo message, length delimited. Does not implicitly {@link mesos.ContainerInfo.verify|verify} messages.
         * @param message ContainerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IContainerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ContainerInfo;

        /**
         * Decodes a ContainerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ContainerInfo;

        /**
         * Verifies a ContainerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContainerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainerInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.ContainerInfo;

        /**
         * Creates a plain object from a ContainerInfo message. Also converts values to other types if specified.
         * @param message ContainerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.ContainerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ContainerInfo {

        /** Type enum. */
        enum Type {
            DOCKER = 1,
            MESOS = 2
        }

        /** Properties of a DockerInfo. */
        interface IDockerInfo {

            /** DockerInfo image */
            image: string;

            /** DockerInfo network */
            network?: mesos.ContainerInfo.DockerInfo.Network;

            /** DockerInfo portMappings */
            portMappings?: mesos.ContainerInfo.DockerInfo.IPortMapping[];

            /** DockerInfo privileged */
            privileged?: boolean;

            /** DockerInfo parameters */
            parameters?: mesos.IParameter[];

            /** DockerInfo forcePullImage */
            forcePullImage?: boolean;

            /** DockerInfo volumeDriver */
            volumeDriver?: string;
        }

        /** Represents a DockerInfo. */
        class DockerInfo {

            /**
             * Constructs a new DockerInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.ContainerInfo.IDockerInfo);

            /** DockerInfo image. */
            public image: string;

            /** DockerInfo network. */
            public network: mesos.ContainerInfo.DockerInfo.Network;

            /** DockerInfo portMappings. */
            public portMappings: mesos.ContainerInfo.DockerInfo.IPortMapping[];

            /** DockerInfo privileged. */
            public privileged: boolean;

            /** DockerInfo parameters. */
            public parameters: mesos.IParameter[];

            /** DockerInfo forcePullImage. */
            public forcePullImage: boolean;

            /** DockerInfo volumeDriver. */
            public volumeDriver: string;

            /**
             * Creates a new DockerInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DockerInfo instance
             */
            public static create(properties?: mesos.ContainerInfo.IDockerInfo): mesos.ContainerInfo.DockerInfo;

            /**
             * Encodes the specified DockerInfo message. Does not implicitly {@link mesos.ContainerInfo.DockerInfo.verify|verify} messages.
             * @param message DockerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.ContainerInfo.IDockerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DockerInfo message, length delimited. Does not implicitly {@link mesos.ContainerInfo.DockerInfo.verify|verify} messages.
             * @param message DockerInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.ContainerInfo.IDockerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DockerInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DockerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ContainerInfo.DockerInfo;

            /**
             * Decodes a DockerInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DockerInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ContainerInfo.DockerInfo;

            /**
             * Verifies a DockerInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DockerInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DockerInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.ContainerInfo.DockerInfo;

            /**
             * Creates a plain object from a DockerInfo message. Also converts values to other types if specified.
             * @param message DockerInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.ContainerInfo.DockerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DockerInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DockerInfo {

            /** Network enum. */
            enum Network {
                HOST = 1,
                BRIDGE = 2,
                NONE = 3,
                USER = 4
            }

            /** Properties of a PortMapping. */
            interface IPortMapping {

                /** PortMapping hostPort */
                hostPort: number;

                /** PortMapping containerPort */
                containerPort: number;

                /** PortMapping protocol */
                protocol?: string;
            }

            /** Represents a PortMapping. */
            class PortMapping {

                /**
                 * Constructs a new PortMapping.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.ContainerInfo.DockerInfo.IPortMapping);

                /** PortMapping hostPort. */
                public hostPort: number;

                /** PortMapping containerPort. */
                public containerPort: number;

                /** PortMapping protocol. */
                public protocol: string;

                /**
                 * Creates a new PortMapping instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PortMapping instance
                 */
                public static create(properties?: mesos.ContainerInfo.DockerInfo.IPortMapping): mesos.ContainerInfo.DockerInfo.PortMapping;

                /**
                 * Encodes the specified PortMapping message. Does not implicitly {@link mesos.ContainerInfo.DockerInfo.PortMapping.verify|verify} messages.
                 * @param message PortMapping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.ContainerInfo.DockerInfo.IPortMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PortMapping message, length delimited. Does not implicitly {@link mesos.ContainerInfo.DockerInfo.PortMapping.verify|verify} messages.
                 * @param message PortMapping message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.ContainerInfo.DockerInfo.IPortMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PortMapping message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PortMapping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ContainerInfo.DockerInfo.PortMapping;

                /**
                 * Decodes a PortMapping message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PortMapping
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ContainerInfo.DockerInfo.PortMapping;

                /**
                 * Verifies a PortMapping message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PortMapping message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PortMapping
                 */
                public static fromObject(object: { [k: string]: any }): mesos.ContainerInfo.DockerInfo.PortMapping;

                /**
                 * Creates a plain object from a PortMapping message. Also converts values to other types if specified.
                 * @param message PortMapping
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.ContainerInfo.DockerInfo.PortMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PortMapping to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a MesosInfo. */
        interface IMesosInfo {

            /** MesosInfo image */
            image?: mesos.IImage;
        }

        /** Represents a MesosInfo. */
        class MesosInfo {

            /**
             * Constructs a new MesosInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.ContainerInfo.IMesosInfo);

            /** MesosInfo image. */
            public image?: (mesos.IImage|null);

            /**
             * Creates a new MesosInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MesosInfo instance
             */
            public static create(properties?: mesos.ContainerInfo.IMesosInfo): mesos.ContainerInfo.MesosInfo;

            /**
             * Encodes the specified MesosInfo message. Does not implicitly {@link mesos.ContainerInfo.MesosInfo.verify|verify} messages.
             * @param message MesosInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.ContainerInfo.IMesosInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MesosInfo message, length delimited. Does not implicitly {@link mesos.ContainerInfo.MesosInfo.verify|verify} messages.
             * @param message MesosInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.ContainerInfo.IMesosInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MesosInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MesosInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ContainerInfo.MesosInfo;

            /**
             * Decodes a MesosInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MesosInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ContainerInfo.MesosInfo;

            /**
             * Verifies a MesosInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MesosInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MesosInfo
             */
            public static fromObject(object: { [k: string]: any }): mesos.ContainerInfo.MesosInfo;

            /**
             * Creates a plain object from a MesosInfo message. Also converts values to other types if specified.
             * @param message MesosInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.ContainerInfo.MesosInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MesosInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ContainerStatus. */
    interface IContainerStatus {

        /** ContainerStatus containerId */
        containerId?: mesos.IContainerID;

        /** ContainerStatus networkInfos */
        networkInfos?: mesos.INetworkInfo[];

        /** ContainerStatus cgroupInfo */
        cgroupInfo?: mesos.ICgroupInfo;

        /** ContainerStatus executorPid */
        executorPid?: number;
    }

    /**
     * Container related information that is resolved during container
     * setup. The information is sent back to the framework as part of the
     * TaskStatus message.
     */
    class ContainerStatus {

        /**
         * Constructs a new ContainerStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IContainerStatus);

        /** ContainerStatus containerId. */
        public containerId?: (mesos.IContainerID|null);

        /** ContainerStatus networkInfos. */
        public networkInfos: mesos.INetworkInfo[];

        /** ContainerStatus cgroupInfo. */
        public cgroupInfo?: (mesos.ICgroupInfo|null);

        /** ContainerStatus executorPid. */
        public executorPid: number;

        /**
         * Creates a new ContainerStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContainerStatus instance
         */
        public static create(properties?: mesos.IContainerStatus): mesos.ContainerStatus;

        /**
         * Encodes the specified ContainerStatus message. Does not implicitly {@link mesos.ContainerStatus.verify|verify} messages.
         * @param message ContainerStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IContainerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContainerStatus message, length delimited. Does not implicitly {@link mesos.ContainerStatus.verify|verify} messages.
         * @param message ContainerStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IContainerStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContainerStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContainerStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.ContainerStatus;

        /**
         * Decodes a ContainerStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContainerStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.ContainerStatus;

        /**
         * Verifies a ContainerStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContainerStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContainerStatus
         */
        public static fromObject(object: { [k: string]: any }): mesos.ContainerStatus;

        /**
         * Creates a plain object from a ContainerStatus message. Also converts values to other types if specified.
         * @param message ContainerStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.ContainerStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContainerStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CgroupInfo. */
    interface ICgroupInfo {

        /** CgroupInfo netCls */
        netCls?: mesos.CgroupInfo.INetCls;
    }

    /** Linux control group (cgroup) information. */
    class CgroupInfo {

        /**
         * Constructs a new CgroupInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ICgroupInfo);

        /** CgroupInfo netCls. */
        public netCls?: (mesos.CgroupInfo.INetCls|null);

        /**
         * Creates a new CgroupInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CgroupInfo instance
         */
        public static create(properties?: mesos.ICgroupInfo): mesos.CgroupInfo;

        /**
         * Encodes the specified CgroupInfo message. Does not implicitly {@link mesos.CgroupInfo.verify|verify} messages.
         * @param message CgroupInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ICgroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CgroupInfo message, length delimited. Does not implicitly {@link mesos.CgroupInfo.verify|verify} messages.
         * @param message CgroupInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ICgroupInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CgroupInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CgroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CgroupInfo;

        /**
         * Decodes a CgroupInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CgroupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CgroupInfo;

        /**
         * Verifies a CgroupInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CgroupInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CgroupInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.CgroupInfo;

        /**
         * Creates a plain object from a CgroupInfo message. Also converts values to other types if specified.
         * @param message CgroupInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.CgroupInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CgroupInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace CgroupInfo {

        /** Properties of a NetCls. */
        interface INetCls {

            /** NetCls classid */
            classid?: number;
        }

        /** Represents a NetCls. */
        class NetCls {

            /**
             * Constructs a new NetCls.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.CgroupInfo.INetCls);

            /** NetCls classid. */
            public classid: number;

            /**
             * Creates a new NetCls instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetCls instance
             */
            public static create(properties?: mesos.CgroupInfo.INetCls): mesos.CgroupInfo.NetCls;

            /**
             * Encodes the specified NetCls message. Does not implicitly {@link mesos.CgroupInfo.NetCls.verify|verify} messages.
             * @param message NetCls message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.CgroupInfo.INetCls, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NetCls message, length delimited. Does not implicitly {@link mesos.CgroupInfo.NetCls.verify|verify} messages.
             * @param message NetCls message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.CgroupInfo.INetCls, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetCls message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetCls
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.CgroupInfo.NetCls;

            /**
             * Decodes a NetCls message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NetCls
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.CgroupInfo.NetCls;

            /**
             * Verifies a NetCls message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NetCls message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NetCls
             */
            public static fromObject(object: { [k: string]: any }): mesos.CgroupInfo.NetCls;

            /**
             * Creates a plain object from a NetCls message. Also converts values to other types if specified.
             * @param message NetCls
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.CgroupInfo.NetCls, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NetCls to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Labels. */
    interface ILabels {

        /** Labels labels */
        labels?: mesos.ILabel[];
    }

    /**
     * Collection of labels. Labels should not contain duplicate key-value
     * pairs.
     */
    class Labels {

        /**
         * Constructs a new Labels.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ILabels);

        /** Labels labels. */
        public labels: mesos.ILabel[];

        /**
         * Creates a new Labels instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Labels instance
         */
        public static create(properties?: mesos.ILabels): mesos.Labels;

        /**
         * Encodes the specified Labels message. Does not implicitly {@link mesos.Labels.verify|verify} messages.
         * @param message Labels message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ILabels, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Labels message, length delimited. Does not implicitly {@link mesos.Labels.verify|verify} messages.
         * @param message Labels message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ILabels, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Labels message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Labels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Labels;

        /**
         * Decodes a Labels message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Labels
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Labels;

        /**
         * Verifies a Labels message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Labels message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Labels
         */
        public static fromObject(object: { [k: string]: any }): mesos.Labels;

        /**
         * Creates a plain object from a Labels message. Also converts values to other types if specified.
         * @param message Labels
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Labels, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Labels to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Label. */
    interface ILabel {

        /** Label key */
        key: string;

        /** Label value */
        value?: string;
    }

    /** Key, value pair used to store free form user-data. */
    class Label {

        /**
         * Constructs a new Label.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.ILabel);

        /** Label key. */
        public key: string;

        /** Label value. */
        public value: string;

        /**
         * Creates a new Label instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Label instance
         */
        public static create(properties?: mesos.ILabel): mesos.Label;

        /**
         * Encodes the specified Label message. Does not implicitly {@link mesos.Label.verify|verify} messages.
         * @param message Label message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Label message, length delimited. Does not implicitly {@link mesos.Label.verify|verify} messages.
         * @param message Label message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.ILabel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Label message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Label
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Label;

        /**
         * Decodes a Label message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Label
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Label;

        /**
         * Verifies a Label message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Label message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Label
         */
        public static fromObject(object: { [k: string]: any }): mesos.Label;

        /**
         * Creates a plain object from a Label message. Also converts values to other types if specified.
         * @param message Label
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Label, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Label to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Port. */
    interface IPort {

        /** Port number */
        number: number;

        /** Port name */
        name?: string;

        /** Port protocol */
        protocol?: string;

        /** Port visibility */
        visibility?: mesos.DiscoveryInfo.Visibility;

        /** Port labels */
        labels?: mesos.ILabels;
    }

    /** Named port used for service discovery. */
    class Port {

        /**
         * Constructs a new Port.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IPort);

        /** Port number. */
        public number: number;

        /** Port name. */
        public name: string;

        /** Port protocol. */
        public protocol: string;

        /** Port visibility. */
        public visibility: mesos.DiscoveryInfo.Visibility;

        /** Port labels. */
        public labels?: (mesos.ILabels|null);

        /**
         * Creates a new Port instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Port instance
         */
        public static create(properties?: mesos.IPort): mesos.Port;

        /**
         * Encodes the specified Port message. Does not implicitly {@link mesos.Port.verify|verify} messages.
         * @param message Port message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IPort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Port message, length delimited. Does not implicitly {@link mesos.Port.verify|verify} messages.
         * @param message Port message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IPort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Port message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Port
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Port;

        /**
         * Decodes a Port message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Port
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Port;

        /**
         * Verifies a Port message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Port message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Port
         */
        public static fromObject(object: { [k: string]: any }): mesos.Port;

        /**
         * Creates a plain object from a Port message. Also converts values to other types if specified.
         * @param message Port
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Port, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Port to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Ports. */
    interface IPorts {

        /** Ports ports */
        ports?: mesos.IPort[];
    }

    /** Collection of ports. */
    class Ports {

        /**
         * Constructs a new Ports.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IPorts);

        /** Ports ports. */
        public ports: mesos.IPort[];

        /**
         * Creates a new Ports instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ports instance
         */
        public static create(properties?: mesos.IPorts): mesos.Ports;

        /**
         * Encodes the specified Ports message. Does not implicitly {@link mesos.Ports.verify|verify} messages.
         * @param message Ports message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IPorts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ports message, length delimited. Does not implicitly {@link mesos.Ports.verify|verify} messages.
         * @param message Ports message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IPorts, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ports message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ports
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Ports;

        /**
         * Decodes a Ports message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ports
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Ports;

        /**
         * Verifies a Ports message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ports message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ports
         */
        public static fromObject(object: { [k: string]: any }): mesos.Ports;

        /**
         * Creates a plain object from a Ports message. Also converts values to other types if specified.
         * @param message Ports
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Ports, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ports to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DiscoveryInfo. */
    interface IDiscoveryInfo {

        /** DiscoveryInfo visibility */
        visibility: mesos.DiscoveryInfo.Visibility;

        /** DiscoveryInfo name */
        name?: string;

        /** DiscoveryInfo environment */
        environment?: string;

        /** DiscoveryInfo location */
        location?: string;

        /** DiscoveryInfo version */
        version?: string;

        /** DiscoveryInfo ports */
        ports?: mesos.IPorts;

        /** DiscoveryInfo labels */
        labels?: mesos.ILabels;
    }

    /**
     * Service discovery information.
     * The visibility field restricts discovery within a framework (FRAMEWORK),
     * within a Mesos cluster (CLUSTER), or places no restrictions (EXTERNAL).
     * Each port in the ports field also has an optional visibility field.
     * If visibility is specified for a port, it overrides the default service-wide
     * DiscoveryInfo.visibility for that port.
     * The environment, location, and version fields provide first class support for
     * common attributes used to differentiate between similar services. The
     * environment may receive values such as PROD/QA/DEV, the location field may
     * receive values like EAST-US/WEST-US/EUROPE/AMEA, and the version field may
     * receive values like v2.0/v0.9. The exact use of these fields is up to each
     * service discovery system.
     */
    class DiscoveryInfo {

        /**
         * Constructs a new DiscoveryInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IDiscoveryInfo);

        /** DiscoveryInfo visibility. */
        public visibility: mesos.DiscoveryInfo.Visibility;

        /** DiscoveryInfo name. */
        public name: string;

        /** DiscoveryInfo environment. */
        public environment: string;

        /** DiscoveryInfo location. */
        public location: string;

        /** DiscoveryInfo version. */
        public version: string;

        /** DiscoveryInfo ports. */
        public ports?: (mesos.IPorts|null);

        /** DiscoveryInfo labels. */
        public labels?: (mesos.ILabels|null);

        /**
         * Creates a new DiscoveryInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DiscoveryInfo instance
         */
        public static create(properties?: mesos.IDiscoveryInfo): mesos.DiscoveryInfo;

        /**
         * Encodes the specified DiscoveryInfo message. Does not implicitly {@link mesos.DiscoveryInfo.verify|verify} messages.
         * @param message DiscoveryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IDiscoveryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DiscoveryInfo message, length delimited. Does not implicitly {@link mesos.DiscoveryInfo.verify|verify} messages.
         * @param message DiscoveryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IDiscoveryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DiscoveryInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DiscoveryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.DiscoveryInfo;

        /**
         * Decodes a DiscoveryInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DiscoveryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.DiscoveryInfo;

        /**
         * Verifies a DiscoveryInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DiscoveryInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DiscoveryInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.DiscoveryInfo;

        /**
         * Creates a plain object from a DiscoveryInfo message. Also converts values to other types if specified.
         * @param message DiscoveryInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.DiscoveryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DiscoveryInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DiscoveryInfo {

        /** Visibility enum. */
        enum Visibility {
            FRAMEWORK = 0,
            CLUSTER = 1,
            EXTERNAL = 2
        }
    }

    /** Properties of a WeightInfo. */
    interface IWeightInfo {

        /** WeightInfo weight */
        weight: number;

        /** WeightInfo role */
        role?: string;
    }

    /**
     * Named WeightInfo to indicate resource allocation
     * priority between the different roles.
     */
    class WeightInfo {

        /**
         * Constructs a new WeightInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IWeightInfo);

        /** WeightInfo weight. */
        public weight: number;

        /** WeightInfo role. */
        public role: string;

        /**
         * Creates a new WeightInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WeightInfo instance
         */
        public static create(properties?: mesos.IWeightInfo): mesos.WeightInfo;

        /**
         * Encodes the specified WeightInfo message. Does not implicitly {@link mesos.WeightInfo.verify|verify} messages.
         * @param message WeightInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IWeightInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WeightInfo message, length delimited. Does not implicitly {@link mesos.WeightInfo.verify|verify} messages.
         * @param message WeightInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IWeightInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WeightInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WeightInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.WeightInfo;

        /**
         * Decodes a WeightInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WeightInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.WeightInfo;

        /**
         * Verifies a WeightInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WeightInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WeightInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.WeightInfo;

        /**
         * Creates a plain object from a WeightInfo message. Also converts values to other types if specified.
         * @param message WeightInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.WeightInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WeightInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VersionInfo. */
    interface IVersionInfo {

        /** VersionInfo version */
        version: string;

        /** VersionInfo buildDate */
        buildDate?: string;

        /** VersionInfo buildTime */
        buildTime?: number;

        /** VersionInfo buildUser */
        buildUser?: string;

        /** VersionInfo gitSha */
        gitSha?: string;

        /** VersionInfo gitBranch */
        gitBranch?: string;

        /** VersionInfo gitTag */
        gitTag?: string;
    }

    /** Version information of a component. */
    class VersionInfo {

        /**
         * Constructs a new VersionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IVersionInfo);

        /** VersionInfo version. */
        public version: string;

        /** VersionInfo buildDate. */
        public buildDate: string;

        /** VersionInfo buildTime. */
        public buildTime: number;

        /** VersionInfo buildUser. */
        public buildUser: string;

        /** VersionInfo gitSha. */
        public gitSha: string;

        /** VersionInfo gitBranch. */
        public gitBranch: string;

        /** VersionInfo gitTag. */
        public gitTag: string;

        /**
         * Creates a new VersionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionInfo instance
         */
        public static create(properties?: mesos.IVersionInfo): mesos.VersionInfo;

        /**
         * Encodes the specified VersionInfo message. Does not implicitly {@link mesos.VersionInfo.verify|verify} messages.
         * @param message VersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionInfo message, length delimited. Does not implicitly {@link mesos.VersionInfo.verify|verify} messages.
         * @param message VersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.VersionInfo;

        /**
         * Decodes a VersionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.VersionInfo;

        /**
         * Verifies a VersionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.VersionInfo;

        /**
         * Creates a plain object from a VersionInfo message. Also converts values to other types if specified.
         * @param message VersionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.VersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Flag. */
    interface IFlag {

        /** Flag name */
        name: string;

        /** Flag value */
        value?: string;
    }

    /** Flag consists of a name and optionally its value. */
    class Flag {

        /**
         * Constructs a new Flag.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IFlag);

        /** Flag name. */
        public name: string;

        /** Flag value. */
        public value: string;

        /**
         * Creates a new Flag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Flag instance
         */
        public static create(properties?: mesos.IFlag): mesos.Flag;

        /**
         * Encodes the specified Flag message. Does not implicitly {@link mesos.Flag.verify|verify} messages.
         * @param message Flag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IFlag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Flag message, length delimited. Does not implicitly {@link mesos.Flag.verify|verify} messages.
         * @param message Flag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IFlag, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Flag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Flag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Flag;

        /**
         * Decodes a Flag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Flag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Flag;

        /**
         * Verifies a Flag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Flag message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Flag
         */
        public static fromObject(object: { [k: string]: any }): mesos.Flag;

        /**
         * Creates a plain object from a Flag message. Also converts values to other types if specified.
         * @param message Flag
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Flag, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Flag to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Role. */
    interface IRole {

        /** Role name */
        name: string;

        /** Role weight */
        weight: number;

        /** Role frameworks */
        frameworks?: mesos.IFrameworkID[];

        /** Role resources */
        resources?: mesos.IResource[];
    }

    /**
     * Describes a Role. Roles can be used to specify that certain resources are
     * reserved for the use of one or more frameworks.
     */
    class Role {

        /**
         * Constructs a new Role.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IRole);

        /** Role name. */
        public name: string;

        /** Role weight. */
        public weight: number;

        /** Role frameworks. */
        public frameworks: mesos.IFrameworkID[];

        /** Role resources. */
        public resources: mesos.IResource[];

        /**
         * Creates a new Role instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Role instance
         */
        public static create(properties?: mesos.IRole): mesos.Role;

        /**
         * Encodes the specified Role message. Does not implicitly {@link mesos.Role.verify|verify} messages.
         * @param message Role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Role message, length delimited. Does not implicitly {@link mesos.Role.verify|verify} messages.
         * @param message Role message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Role message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Role;

        /**
         * Decodes a Role message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Role;

        /**
         * Verifies a Role message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Role message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Role
         */
        public static fromObject(object: { [k: string]: any }): mesos.Role;

        /**
         * Creates a plain object from a Role message. Also converts values to other types if specified.
         * @param message Role
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Role, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Role to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Metric. */
    interface IMetric {

        /** Metric name */
        name: string;

        /** Metric value */
        value?: number;
    }

    /** Metric consists of a name and optionally its value. */
    class Metric {

        /**
         * Constructs a new Metric.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IMetric);

        /** Metric name. */
        public name: string;

        /** Metric value. */
        public value: number;

        /**
         * Creates a new Metric instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metric instance
         */
        public static create(properties?: mesos.IMetric): mesos.Metric;

        /**
         * Encodes the specified Metric message. Does not implicitly {@link mesos.Metric.verify|verify} messages.
         * @param message Metric message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metric message, length delimited. Does not implicitly {@link mesos.Metric.verify|verify} messages.
         * @param message Metric message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metric message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metric
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.Metric;

        /**
         * Decodes a Metric message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metric
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.Metric;

        /**
         * Verifies a Metric message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metric message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metric
         */
        public static fromObject(object: { [k: string]: any }): mesos.Metric;

        /**
         * Creates a plain object from a Metric message. Also converts values to other types if specified.
         * @param message Metric
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metric to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileInfo. */
    interface IFileInfo {

        /** FileInfo path */
        path: string;

        /** FileInfo nlink */
        nlink?: number;

        /** FileInfo size */
        size?: number;

        /** FileInfo mtime */
        mtime?: mesos.ITimeInfo;

        /** FileInfo mode */
        mode?: number;

        /** FileInfo uid */
        uid?: string;

        /** FileInfo gid */
        gid?: string;
    }

    /** Describes a File. */
    class FileInfo {

        /**
         * Constructs a new FileInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: mesos.IFileInfo);

        /** FileInfo path. */
        public path: string;

        /** FileInfo nlink. */
        public nlink: number;

        /** FileInfo size. */
        public size: number;

        /** FileInfo mtime. */
        public mtime?: (mesos.ITimeInfo|null);

        /** FileInfo mode. */
        public mode: number;

        /** FileInfo uid. */
        public uid: string;

        /** FileInfo gid. */
        public gid: string;

        /**
         * Creates a new FileInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileInfo instance
         */
        public static create(properties?: mesos.IFileInfo): mesos.FileInfo;

        /**
         * Encodes the specified FileInfo message. Does not implicitly {@link mesos.FileInfo.verify|verify} messages.
         * @param message FileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mesos.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link mesos.FileInfo.verify|verify} messages.
         * @param message FileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mesos.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.FileInfo;

        /**
         * Decodes a FileInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.FileInfo;

        /**
         * Verifies a FileInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileInfo
         */
        public static fromObject(object: { [k: string]: any }): mesos.FileInfo;

        /**
         * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
         * @param message FileInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mesos.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Namespace scheduler. */
    namespace scheduler {

        /** Properties of an Event. */
        interface IEvent {

            /** Event type */
            type?: mesos.scheduler.Event.Type;

            /** Event subscribed */
            subscribed?: mesos.scheduler.Event.ISubscribed;

            /** Event offers */
            offers?: mesos.scheduler.Event.IOffers;

            /** Event inverseOffers */
            inverseOffers?: mesos.scheduler.Event.IInverseOffers;

            /** Event rescind */
            rescind?: mesos.scheduler.Event.IRescind;

            /** Event rescindInverseOffer */
            rescindInverseOffer?: mesos.scheduler.Event.IRescindInverseOffer;

            /** Event update */
            update?: mesos.scheduler.Event.IUpdate;

            /** Event message */
            message?: mesos.scheduler.Event.IMessage;

            /** Event failure */
            failure?: mesos.scheduler.Event.IFailure;

            /** Event error */
            error?: mesos.scheduler.Event.IError;
        }

        /**
         * Scheduler event API.
         *
         * An event is described using the standard protocol buffer "union"
         * trick, see:
         * https://developers.google.com/protocol-buffers/docs/techniques#union.
         */
        class Event {

            /**
             * Constructs a new Event.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.scheduler.IEvent);

            /** Event type. */
            public type: mesos.scheduler.Event.Type;

            /** Event subscribed. */
            public subscribed?: (mesos.scheduler.Event.ISubscribed|null);

            /** Event offers. */
            public offers?: (mesos.scheduler.Event.IOffers|null);

            /** Event inverseOffers. */
            public inverseOffers?: (mesos.scheduler.Event.IInverseOffers|null);

            /** Event rescind. */
            public rescind?: (mesos.scheduler.Event.IRescind|null);

            /** Event rescindInverseOffer. */
            public rescindInverseOffer?: (mesos.scheduler.Event.IRescindInverseOffer|null);

            /** Event update. */
            public update?: (mesos.scheduler.Event.IUpdate|null);

            /** Event message. */
            public message?: (mesos.scheduler.Event.IMessage|null);

            /** Event failure. */
            public failure?: (mesos.scheduler.Event.IFailure|null);

            /** Event error. */
            public error?: (mesos.scheduler.Event.IError|null);

            /**
             * Creates a new Event instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Event instance
             */
            public static create(properties?: mesos.scheduler.IEvent): mesos.scheduler.Event;

            /**
             * Encodes the specified Event message. Does not implicitly {@link mesos.scheduler.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.scheduler.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link mesos.scheduler.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.scheduler.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event;

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event;

            /**
             * Verifies an Event message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Event
             */
            public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event;

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @param message Event
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.scheduler.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Event to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Event {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                SUBSCRIBED = 1,
                OFFERS = 2,
                INVERSE_OFFERS = 9,
                RESCIND = 3,
                RESCIND_INVERSE_OFFER = 10,
                UPDATE = 4,
                MESSAGE = 5,
                FAILURE = 6,
                ERROR = 7,
                HEARTBEAT = 8
            }

            /** Properties of a Subscribed. */
            interface ISubscribed {

                /** Subscribed frameworkId */
                frameworkId: mesos.IFrameworkID;

                /** Subscribed heartbeatIntervalSeconds */
                heartbeatIntervalSeconds?: number;

                /** Subscribed masterInfo */
                masterInfo?: mesos.IMasterInfo;
            }

            /** Represents a Subscribed. */
            class Subscribed {

                /**
                 * Constructs a new Subscribed.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.ISubscribed);

                /** Subscribed frameworkId. */
                public frameworkId: mesos.IFrameworkID;

                /** Subscribed heartbeatIntervalSeconds. */
                public heartbeatIntervalSeconds: number;

                /** Subscribed masterInfo. */
                public masterInfo?: (mesos.IMasterInfo|null);

                /**
                 * Creates a new Subscribed instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Subscribed instance
                 */
                public static create(properties?: mesos.scheduler.Event.ISubscribed): mesos.scheduler.Event.Subscribed;

                /**
                 * Encodes the specified Subscribed message. Does not implicitly {@link mesos.scheduler.Event.Subscribed.verify|verify} messages.
                 * @param message Subscribed message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.ISubscribed, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Subscribed message, length delimited. Does not implicitly {@link mesos.scheduler.Event.Subscribed.verify|verify} messages.
                 * @param message Subscribed message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.ISubscribed, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Subscribed message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Subscribed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.Subscribed;

                /**
                 * Decodes a Subscribed message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Subscribed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.Subscribed;

                /**
                 * Verifies a Subscribed message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Subscribed message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Subscribed
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.Subscribed;

                /**
                 * Creates a plain object from a Subscribed message. Also converts values to other types if specified.
                 * @param message Subscribed
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.Subscribed, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Subscribed to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Offers. */
            interface IOffers {

                /** Offers offers */
                offers?: mesos.IOffer[];
            }

            /** Represents an Offers. */
            class Offers {

                /**
                 * Constructs a new Offers.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.IOffers);

                /** Offers offers. */
                public offers: mesos.IOffer[];

                /**
                 * Creates a new Offers instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Offers instance
                 */
                public static create(properties?: mesos.scheduler.Event.IOffers): mesos.scheduler.Event.Offers;

                /**
                 * Encodes the specified Offers message. Does not implicitly {@link mesos.scheduler.Event.Offers.verify|verify} messages.
                 * @param message Offers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.IOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Offers message, length delimited. Does not implicitly {@link mesos.scheduler.Event.Offers.verify|verify} messages.
                 * @param message Offers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.IOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Offers message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Offers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.Offers;

                /**
                 * Decodes an Offers message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Offers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.Offers;

                /**
                 * Verifies an Offers message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Offers message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Offers
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.Offers;

                /**
                 * Creates a plain object from an Offers message. Also converts values to other types if specified.
                 * @param message Offers
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.Offers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Offers to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an InverseOffers. */
            interface IInverseOffers {

                /** InverseOffers inverseOffers */
                inverseOffers?: mesos.IInverseOffer[];
            }

            /** Represents an InverseOffers. */
            class InverseOffers {

                /**
                 * Constructs a new InverseOffers.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.IInverseOffers);

                /** InverseOffers inverseOffers. */
                public inverseOffers: mesos.IInverseOffer[];

                /**
                 * Creates a new InverseOffers instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InverseOffers instance
                 */
                public static create(properties?: mesos.scheduler.Event.IInverseOffers): mesos.scheduler.Event.InverseOffers;

                /**
                 * Encodes the specified InverseOffers message. Does not implicitly {@link mesos.scheduler.Event.InverseOffers.verify|verify} messages.
                 * @param message InverseOffers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.IInverseOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InverseOffers message, length delimited. Does not implicitly {@link mesos.scheduler.Event.InverseOffers.verify|verify} messages.
                 * @param message InverseOffers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.IInverseOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InverseOffers message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InverseOffers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.InverseOffers;

                /**
                 * Decodes an InverseOffers message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InverseOffers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.InverseOffers;

                /**
                 * Verifies an InverseOffers message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InverseOffers message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InverseOffers
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.InverseOffers;

                /**
                 * Creates a plain object from an InverseOffers message. Also converts values to other types if specified.
                 * @param message InverseOffers
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.InverseOffers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InverseOffers to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Rescind. */
            interface IRescind {

                /** Rescind offerId */
                offerId: mesos.IOfferID;
            }

            /** Represents a Rescind. */
            class Rescind {

                /**
                 * Constructs a new Rescind.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.IRescind);

                /** Rescind offerId. */
                public offerId: mesos.IOfferID;

                /**
                 * Creates a new Rescind instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Rescind instance
                 */
                public static create(properties?: mesos.scheduler.Event.IRescind): mesos.scheduler.Event.Rescind;

                /**
                 * Encodes the specified Rescind message. Does not implicitly {@link mesos.scheduler.Event.Rescind.verify|verify} messages.
                 * @param message Rescind message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.IRescind, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Rescind message, length delimited. Does not implicitly {@link mesos.scheduler.Event.Rescind.verify|verify} messages.
                 * @param message Rescind message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.IRescind, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Rescind message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Rescind
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.Rescind;

                /**
                 * Decodes a Rescind message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Rescind
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.Rescind;

                /**
                 * Verifies a Rescind message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Rescind message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Rescind
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.Rescind;

                /**
                 * Creates a plain object from a Rescind message. Also converts values to other types if specified.
                 * @param message Rescind
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.Rescind, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Rescind to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RescindInverseOffer. */
            interface IRescindInverseOffer {

                /** RescindInverseOffer inverseOfferId */
                inverseOfferId: mesos.IOfferID;
            }

            /** Represents a RescindInverseOffer. */
            class RescindInverseOffer {

                /**
                 * Constructs a new RescindInverseOffer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.IRescindInverseOffer);

                /** RescindInverseOffer inverseOfferId. */
                public inverseOfferId: mesos.IOfferID;

                /**
                 * Creates a new RescindInverseOffer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RescindInverseOffer instance
                 */
                public static create(properties?: mesos.scheduler.Event.IRescindInverseOffer): mesos.scheduler.Event.RescindInverseOffer;

                /**
                 * Encodes the specified RescindInverseOffer message. Does not implicitly {@link mesos.scheduler.Event.RescindInverseOffer.verify|verify} messages.
                 * @param message RescindInverseOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.IRescindInverseOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RescindInverseOffer message, length delimited. Does not implicitly {@link mesos.scheduler.Event.RescindInverseOffer.verify|verify} messages.
                 * @param message RescindInverseOffer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.IRescindInverseOffer, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RescindInverseOffer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RescindInverseOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.RescindInverseOffer;

                /**
                 * Decodes a RescindInverseOffer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RescindInverseOffer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.RescindInverseOffer;

                /**
                 * Verifies a RescindInverseOffer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RescindInverseOffer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RescindInverseOffer
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.RescindInverseOffer;

                /**
                 * Creates a plain object from a RescindInverseOffer message. Also converts values to other types if specified.
                 * @param message RescindInverseOffer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.RescindInverseOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RescindInverseOffer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Update. */
            interface IUpdate {

                /** Update status */
                status: mesos.ITaskStatus;
            }

            /** Represents an Update. */
            class Update {

                /**
                 * Constructs a new Update.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.IUpdate);

                /** Update status. */
                public status: mesos.ITaskStatus;

                /**
                 * Creates a new Update instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Update instance
                 */
                public static create(properties?: mesos.scheduler.Event.IUpdate): mesos.scheduler.Event.Update;

                /**
                 * Encodes the specified Update message. Does not implicitly {@link mesos.scheduler.Event.Update.verify|verify} messages.
                 * @param message Update message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Update message, length delimited. Does not implicitly {@link mesos.scheduler.Event.Update.verify|verify} messages.
                 * @param message Update message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Update message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Update
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.Update;

                /**
                 * Decodes an Update message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Update
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.Update;

                /**
                 * Verifies an Update message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Update message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Update
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.Update;

                /**
                 * Creates a plain object from an Update message. Also converts values to other types if specified.
                 * @param message Update
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.Update, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Update to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Message. */
            interface IMessage {

                /** Message agentId */
                agentId: mesos.IAgentID;

                /** Message executorId */
                executorId: mesos.IExecutorID;

                /** Message data */
                data: Uint8Array;
            }

            /** Represents a Message. */
            class Message {

                /**
                 * Constructs a new Message.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.IMessage);

                /** Message agentId. */
                public agentId: mesos.IAgentID;

                /** Message executorId. */
                public executorId: mesos.IExecutorID;

                /** Message data. */
                public data: Uint8Array;

                /**
                 * Creates a new Message instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Message instance
                 */
                public static create(properties?: mesos.scheduler.Event.IMessage): mesos.scheduler.Event.Message;

                /**
                 * Encodes the specified Message message. Does not implicitly {@link mesos.scheduler.Event.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Message message, length delimited. Does not implicitly {@link mesos.scheduler.Event.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Message message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.Message;

                /**
                 * Decodes a Message message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.Message;

                /**
                 * Verifies a Message message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Message message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Message
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.Message;

                /**
                 * Creates a plain object from a Message message. Also converts values to other types if specified.
                 * @param message Message
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Message to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Failure. */
            interface IFailure {

                /** Failure agentId */
                agentId?: mesos.IAgentID;

                /** Failure executorId */
                executorId?: mesos.IExecutorID;

                /** Failure status */
                status?: number;
            }

            /** Represents a Failure. */
            class Failure {

                /**
                 * Constructs a new Failure.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.IFailure);

                /** Failure agentId. */
                public agentId?: (mesos.IAgentID|null);

                /** Failure executorId. */
                public executorId?: (mesos.IExecutorID|null);

                /** Failure status. */
                public status: number;

                /**
                 * Creates a new Failure instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Failure instance
                 */
                public static create(properties?: mesos.scheduler.Event.IFailure): mesos.scheduler.Event.Failure;

                /**
                 * Encodes the specified Failure message. Does not implicitly {@link mesos.scheduler.Event.Failure.verify|verify} messages.
                 * @param message Failure message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.IFailure, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Failure message, length delimited. Does not implicitly {@link mesos.scheduler.Event.Failure.verify|verify} messages.
                 * @param message Failure message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.IFailure, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Failure message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Failure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.Failure;

                /**
                 * Decodes a Failure message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Failure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.Failure;

                /**
                 * Verifies a Failure message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Failure message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Failure
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.Failure;

                /**
                 * Creates a plain object from a Failure message. Also converts values to other types if specified.
                 * @param message Failure
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.Failure, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Failure to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Error. */
            interface IError {

                /** Error message */
                message: string;
            }

            /** Represents an Error. */
            class Error {

                /**
                 * Constructs a new Error.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Event.IError);

                /** Error message. */
                public message: string;

                /**
                 * Creates a new Error instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Error instance
                 */
                public static create(properties?: mesos.scheduler.Event.IError): mesos.scheduler.Event.Error;

                /**
                 * Encodes the specified Error message. Does not implicitly {@link mesos.scheduler.Event.Error.verify|verify} messages.
                 * @param message Error message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Event.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Error message, length delimited. Does not implicitly {@link mesos.scheduler.Event.Error.verify|verify} messages.
                 * @param message Error message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Event.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Error message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Event.Error;

                /**
                 * Decodes an Error message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Event.Error;

                /**
                 * Verifies an Error message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Error message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Error
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Event.Error;

                /**
                 * Creates a plain object from an Error message. Also converts values to other types if specified.
                 * @param message Error
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Event.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Error to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Call. */
        interface ICall {

            /** Call frameworkId */
            frameworkId?: mesos.IFrameworkID;

            /** Call type */
            type?: mesos.scheduler.Call.Type;

            /** Call subscribe */
            subscribe?: mesos.scheduler.Call.ISubscribe;

            /** Call accept */
            accept?: mesos.scheduler.Call.IAccept;

            /** Call decline */
            decline?: mesos.scheduler.Call.IDecline;

            /** Call acceptInverseOffers */
            acceptInverseOffers?: mesos.scheduler.Call.IAcceptInverseOffers;

            /** Call declineInverseOffers */
            declineInverseOffers?: mesos.scheduler.Call.IDeclineInverseOffers;

            /** Call revive */
            revive?: mesos.scheduler.Call.IRevive;

            /** Call kill */
            kill?: mesos.scheduler.Call.IKill;

            /** Call shutdown */
            shutdown?: mesos.scheduler.Call.IShutdown;

            /** Call acknowledge */
            acknowledge?: mesos.scheduler.Call.IAcknowledge;

            /** Call reconcile */
            reconcile?: mesos.scheduler.Call.IReconcile;

            /** Call message */
            message?: mesos.scheduler.Call.IMessage;

            /** Call request */
            request?: mesos.scheduler.Call.IRequest;

            /** Call suppress */
            suppress?: mesos.scheduler.Call.ISuppress;
        }

        /**
         * Scheduler call API.
         *
         * Like Event, a Call is described using the standard protocol buffer
         * "union" trick (see above).
         */
        class Call {

            /**
             * Constructs a new Call.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.scheduler.ICall);

            /** Call frameworkId. */
            public frameworkId?: (mesos.IFrameworkID|null);

            /** Call type. */
            public type: mesos.scheduler.Call.Type;

            /** Call subscribe. */
            public subscribe?: (mesos.scheduler.Call.ISubscribe|null);

            /** Call accept. */
            public accept?: (mesos.scheduler.Call.IAccept|null);

            /** Call decline. */
            public decline?: (mesos.scheduler.Call.IDecline|null);

            /** Call acceptInverseOffers. */
            public acceptInverseOffers?: (mesos.scheduler.Call.IAcceptInverseOffers|null);

            /** Call declineInverseOffers. */
            public declineInverseOffers?: (mesos.scheduler.Call.IDeclineInverseOffers|null);

            /** Call revive. */
            public revive?: (mesos.scheduler.Call.IRevive|null);

            /** Call kill. */
            public kill?: (mesos.scheduler.Call.IKill|null);

            /** Call shutdown. */
            public shutdown?: (mesos.scheduler.Call.IShutdown|null);

            /** Call acknowledge. */
            public acknowledge?: (mesos.scheduler.Call.IAcknowledge|null);

            /** Call reconcile. */
            public reconcile?: (mesos.scheduler.Call.IReconcile|null);

            /** Call message. */
            public message?: (mesos.scheduler.Call.IMessage|null);

            /** Call request. */
            public request?: (mesos.scheduler.Call.IRequest|null);

            /** Call suppress. */
            public suppress?: (mesos.scheduler.Call.ISuppress|null);

            /**
             * Creates a new Call instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Call instance
             */
            public static create(properties?: mesos.scheduler.ICall): mesos.scheduler.Call;

            /**
             * Encodes the specified Call message. Does not implicitly {@link mesos.scheduler.Call.verify|verify} messages.
             * @param message Call message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.scheduler.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Call message, length delimited. Does not implicitly {@link mesos.scheduler.Call.verify|verify} messages.
             * @param message Call message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.scheduler.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Call message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Call
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call;

            /**
             * Decodes a Call message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Call
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call;

            /**
             * Verifies a Call message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Call message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Call
             */
            public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call;

            /**
             * Creates a plain object from a Call message. Also converts values to other types if specified.
             * @param message Call
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.scheduler.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Call to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Call {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                SUBSCRIBE = 1,
                TEARDOWN = 2,
                ACCEPT = 3,
                DECLINE = 4,
                ACCEPT_INVERSE_OFFERS = 13,
                DECLINE_INVERSE_OFFERS = 14,
                REVIVE = 5,
                KILL = 6,
                SHUTDOWN = 7,
                ACKNOWLEDGE = 8,
                RECONCILE = 9,
                MESSAGE = 10,
                REQUEST = 11,
                SUPPRESS = 12
            }

            /** Properties of a Subscribe. */
            interface ISubscribe {

                /** Subscribe frameworkInfo */
                frameworkInfo: mesos.IFrameworkInfo;
            }

            /** Represents a Subscribe. */
            class Subscribe {

                /**
                 * Constructs a new Subscribe.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.ISubscribe);

                /** Subscribe frameworkInfo. */
                public frameworkInfo: mesos.IFrameworkInfo;

                /**
                 * Creates a new Subscribe instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Subscribe instance
                 */
                public static create(properties?: mesos.scheduler.Call.ISubscribe): mesos.scheduler.Call.Subscribe;

                /**
                 * Encodes the specified Subscribe message. Does not implicitly {@link mesos.scheduler.Call.Subscribe.verify|verify} messages.
                 * @param message Subscribe message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.ISubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Subscribe message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Subscribe.verify|verify} messages.
                 * @param message Subscribe message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.ISubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Subscribe message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Subscribe
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Subscribe;

                /**
                 * Decodes a Subscribe message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Subscribe
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Subscribe;

                /**
                 * Verifies a Subscribe message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Subscribe message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Subscribe
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Subscribe;

                /**
                 * Creates a plain object from a Subscribe message. Also converts values to other types if specified.
                 * @param message Subscribe
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Subscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Subscribe to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Accept. */
            interface IAccept {

                /** Accept offerIds */
                offerIds?: mesos.IOfferID[];

                /** Accept operations */
                operations?: mesos.Offer.IOperation[];

                /** Accept filters */
                filters?: mesos.IFilters;
            }

            /** Represents an Accept. */
            class Accept {

                /**
                 * Constructs a new Accept.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IAccept);

                /** Accept offerIds. */
                public offerIds: mesos.IOfferID[];

                /** Accept operations. */
                public operations: mesos.Offer.IOperation[];

                /** Accept filters. */
                public filters?: (mesos.IFilters|null);

                /**
                 * Creates a new Accept instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Accept instance
                 */
                public static create(properties?: mesos.scheduler.Call.IAccept): mesos.scheduler.Call.Accept;

                /**
                 * Encodes the specified Accept message. Does not implicitly {@link mesos.scheduler.Call.Accept.verify|verify} messages.
                 * @param message Accept message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IAccept, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Accept message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Accept.verify|verify} messages.
                 * @param message Accept message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IAccept, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Accept message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Accept
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Accept;

                /**
                 * Decodes an Accept message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Accept
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Accept;

                /**
                 * Verifies an Accept message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Accept message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Accept
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Accept;

                /**
                 * Creates a plain object from an Accept message. Also converts values to other types if specified.
                 * @param message Accept
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Accept, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Accept to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Decline. */
            interface IDecline {

                /** Decline offerIds */
                offerIds?: mesos.IOfferID[];

                /** Decline filters */
                filters?: mesos.IFilters;
            }

            /** Represents a Decline. */
            class Decline {

                /**
                 * Constructs a new Decline.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IDecline);

                /** Decline offerIds. */
                public offerIds: mesos.IOfferID[];

                /** Decline filters. */
                public filters?: (mesos.IFilters|null);

                /**
                 * Creates a new Decline instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Decline instance
                 */
                public static create(properties?: mesos.scheduler.Call.IDecline): mesos.scheduler.Call.Decline;

                /**
                 * Encodes the specified Decline message. Does not implicitly {@link mesos.scheduler.Call.Decline.verify|verify} messages.
                 * @param message Decline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IDecline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Decline message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Decline.verify|verify} messages.
                 * @param message Decline message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IDecline, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Decline message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Decline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Decline;

                /**
                 * Decodes a Decline message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Decline
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Decline;

                /**
                 * Verifies a Decline message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Decline message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Decline
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Decline;

                /**
                 * Creates a plain object from a Decline message. Also converts values to other types if specified.
                 * @param message Decline
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Decline, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Decline to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an AcceptInverseOffers. */
            interface IAcceptInverseOffers {

                /** AcceptInverseOffers inverseOfferIds */
                inverseOfferIds?: mesos.IOfferID[];

                /** AcceptInverseOffers filters */
                filters?: mesos.IFilters;
            }

            /** Represents an AcceptInverseOffers. */
            class AcceptInverseOffers {

                /**
                 * Constructs a new AcceptInverseOffers.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IAcceptInverseOffers);

                /** AcceptInverseOffers inverseOfferIds. */
                public inverseOfferIds: mesos.IOfferID[];

                /** AcceptInverseOffers filters. */
                public filters?: (mesos.IFilters|null);

                /**
                 * Creates a new AcceptInverseOffers instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AcceptInverseOffers instance
                 */
                public static create(properties?: mesos.scheduler.Call.IAcceptInverseOffers): mesos.scheduler.Call.AcceptInverseOffers;

                /**
                 * Encodes the specified AcceptInverseOffers message. Does not implicitly {@link mesos.scheduler.Call.AcceptInverseOffers.verify|verify} messages.
                 * @param message AcceptInverseOffers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IAcceptInverseOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AcceptInverseOffers message, length delimited. Does not implicitly {@link mesos.scheduler.Call.AcceptInverseOffers.verify|verify} messages.
                 * @param message AcceptInverseOffers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IAcceptInverseOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AcceptInverseOffers message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AcceptInverseOffers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.AcceptInverseOffers;

                /**
                 * Decodes an AcceptInverseOffers message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AcceptInverseOffers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.AcceptInverseOffers;

                /**
                 * Verifies an AcceptInverseOffers message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AcceptInverseOffers message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AcceptInverseOffers
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.AcceptInverseOffers;

                /**
                 * Creates a plain object from an AcceptInverseOffers message. Also converts values to other types if specified.
                 * @param message AcceptInverseOffers
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.AcceptInverseOffers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AcceptInverseOffers to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DeclineInverseOffers. */
            interface IDeclineInverseOffers {

                /** DeclineInverseOffers inverseOfferIds */
                inverseOfferIds?: mesos.IOfferID[];

                /** DeclineInverseOffers filters */
                filters?: mesos.IFilters;
            }

            /** Represents a DeclineInverseOffers. */
            class DeclineInverseOffers {

                /**
                 * Constructs a new DeclineInverseOffers.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IDeclineInverseOffers);

                /** DeclineInverseOffers inverseOfferIds. */
                public inverseOfferIds: mesos.IOfferID[];

                /** DeclineInverseOffers filters. */
                public filters?: (mesos.IFilters|null);

                /**
                 * Creates a new DeclineInverseOffers instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DeclineInverseOffers instance
                 */
                public static create(properties?: mesos.scheduler.Call.IDeclineInverseOffers): mesos.scheduler.Call.DeclineInverseOffers;

                /**
                 * Encodes the specified DeclineInverseOffers message. Does not implicitly {@link mesos.scheduler.Call.DeclineInverseOffers.verify|verify} messages.
                 * @param message DeclineInverseOffers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IDeclineInverseOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DeclineInverseOffers message, length delimited. Does not implicitly {@link mesos.scheduler.Call.DeclineInverseOffers.verify|verify} messages.
                 * @param message DeclineInverseOffers message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IDeclineInverseOffers, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DeclineInverseOffers message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DeclineInverseOffers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.DeclineInverseOffers;

                /**
                 * Decodes a DeclineInverseOffers message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DeclineInverseOffers
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.DeclineInverseOffers;

                /**
                 * Verifies a DeclineInverseOffers message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DeclineInverseOffers message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DeclineInverseOffers
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.DeclineInverseOffers;

                /**
                 * Creates a plain object from a DeclineInverseOffers message. Also converts values to other types if specified.
                 * @param message DeclineInverseOffers
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.DeclineInverseOffers, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DeclineInverseOffers to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Revive. */
            interface IRevive {

                /** Revive role */
                role?: string;
            }

            /** Represents a Revive. */
            class Revive {

                /**
                 * Constructs a new Revive.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IRevive);

                /** Revive role. */
                public role: string;

                /**
                 * Creates a new Revive instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Revive instance
                 */
                public static create(properties?: mesos.scheduler.Call.IRevive): mesos.scheduler.Call.Revive;

                /**
                 * Encodes the specified Revive message. Does not implicitly {@link mesos.scheduler.Call.Revive.verify|verify} messages.
                 * @param message Revive message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IRevive, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Revive message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Revive.verify|verify} messages.
                 * @param message Revive message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IRevive, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Revive message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Revive
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Revive;

                /**
                 * Decodes a Revive message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Revive
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Revive;

                /**
                 * Verifies a Revive message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Revive message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Revive
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Revive;

                /**
                 * Creates a plain object from a Revive message. Also converts values to other types if specified.
                 * @param message Revive
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Revive, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Revive to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Kill. */
            interface IKill {

                /** Kill taskId */
                taskId: mesos.ITaskID;

                /** Kill agentId */
                agentId?: mesos.IAgentID;

                /** Kill killPolicy */
                killPolicy?: mesos.IKillPolicy;
            }

            /** Represents a Kill. */
            class Kill {

                /**
                 * Constructs a new Kill.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IKill);

                /** Kill taskId. */
                public taskId: mesos.ITaskID;

                /** Kill agentId. */
                public agentId?: (mesos.IAgentID|null);

                /** Kill killPolicy. */
                public killPolicy?: (mesos.IKillPolicy|null);

                /**
                 * Creates a new Kill instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Kill instance
                 */
                public static create(properties?: mesos.scheduler.Call.IKill): mesos.scheduler.Call.Kill;

                /**
                 * Encodes the specified Kill message. Does not implicitly {@link mesos.scheduler.Call.Kill.verify|verify} messages.
                 * @param message Kill message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IKill, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Kill message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Kill.verify|verify} messages.
                 * @param message Kill message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IKill, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Kill message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Kill
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Kill;

                /**
                 * Decodes a Kill message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Kill
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Kill;

                /**
                 * Verifies a Kill message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Kill message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Kill
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Kill;

                /**
                 * Creates a plain object from a Kill message. Also converts values to other types if specified.
                 * @param message Kill
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Kill, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Kill to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Shutdown. */
            interface IShutdown {

                /** Shutdown executorId */
                executorId: mesos.IExecutorID;

                /** Shutdown agentId */
                agentId: mesos.IAgentID;
            }

            /** Represents a Shutdown. */
            class Shutdown {

                /**
                 * Constructs a new Shutdown.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IShutdown);

                /** Shutdown executorId. */
                public executorId: mesos.IExecutorID;

                /** Shutdown agentId. */
                public agentId: mesos.IAgentID;

                /**
                 * Creates a new Shutdown instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Shutdown instance
                 */
                public static create(properties?: mesos.scheduler.Call.IShutdown): mesos.scheduler.Call.Shutdown;

                /**
                 * Encodes the specified Shutdown message. Does not implicitly {@link mesos.scheduler.Call.Shutdown.verify|verify} messages.
                 * @param message Shutdown message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IShutdown, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Shutdown message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Shutdown.verify|verify} messages.
                 * @param message Shutdown message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IShutdown, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Shutdown message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Shutdown
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Shutdown;

                /**
                 * Decodes a Shutdown message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Shutdown
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Shutdown;

                /**
                 * Verifies a Shutdown message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Shutdown message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Shutdown
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Shutdown;

                /**
                 * Creates a plain object from a Shutdown message. Also converts values to other types if specified.
                 * @param message Shutdown
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Shutdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Shutdown to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Acknowledge. */
            interface IAcknowledge {

                /** Acknowledge agentId */
                agentId: mesos.IAgentID;

                /** Acknowledge taskId */
                taskId: mesos.ITaskID;

                /** Acknowledge uuid */
                uuid: Uint8Array;
            }

            /** Represents an Acknowledge. */
            class Acknowledge {

                /**
                 * Constructs a new Acknowledge.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IAcknowledge);

                /** Acknowledge agentId. */
                public agentId: mesos.IAgentID;

                /** Acknowledge taskId. */
                public taskId: mesos.ITaskID;

                /** Acknowledge uuid. */
                public uuid: Uint8Array;

                /**
                 * Creates a new Acknowledge instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Acknowledge instance
                 */
                public static create(properties?: mesos.scheduler.Call.IAcknowledge): mesos.scheduler.Call.Acknowledge;

                /**
                 * Encodes the specified Acknowledge message. Does not implicitly {@link mesos.scheduler.Call.Acknowledge.verify|verify} messages.
                 * @param message Acknowledge message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IAcknowledge, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Acknowledge message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Acknowledge.verify|verify} messages.
                 * @param message Acknowledge message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IAcknowledge, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Acknowledge message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Acknowledge
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Acknowledge;

                /**
                 * Decodes an Acknowledge message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Acknowledge
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Acknowledge;

                /**
                 * Verifies an Acknowledge message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Acknowledge message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Acknowledge
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Acknowledge;

                /**
                 * Creates a plain object from an Acknowledge message. Also converts values to other types if specified.
                 * @param message Acknowledge
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Acknowledge, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Acknowledge to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Reconcile. */
            interface IReconcile {

                /** Reconcile tasks */
                tasks?: mesos.scheduler.Call.Reconcile.ITask[];
            }

            /** Represents a Reconcile. */
            class Reconcile {

                /**
                 * Constructs a new Reconcile.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IReconcile);

                /** Reconcile tasks. */
                public tasks: mesos.scheduler.Call.Reconcile.ITask[];

                /**
                 * Creates a new Reconcile instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Reconcile instance
                 */
                public static create(properties?: mesos.scheduler.Call.IReconcile): mesos.scheduler.Call.Reconcile;

                /**
                 * Encodes the specified Reconcile message. Does not implicitly {@link mesos.scheduler.Call.Reconcile.verify|verify} messages.
                 * @param message Reconcile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IReconcile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Reconcile message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Reconcile.verify|verify} messages.
                 * @param message Reconcile message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IReconcile, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Reconcile message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Reconcile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Reconcile;

                /**
                 * Decodes a Reconcile message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Reconcile
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Reconcile;

                /**
                 * Verifies a Reconcile message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Reconcile message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Reconcile
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Reconcile;

                /**
                 * Creates a plain object from a Reconcile message. Also converts values to other types if specified.
                 * @param message Reconcile
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Reconcile, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Reconcile to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Reconcile {

                /** Properties of a Task. */
                interface ITask {

                    /** Task taskId */
                    taskId: mesos.ITaskID;

                    /** Task agentId */
                    agentId?: mesos.IAgentID;
                }

                /** Represents a Task. */
                class Task {

                    /**
                     * Constructs a new Task.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: mesos.scheduler.Call.Reconcile.ITask);

                    /** Task taskId. */
                    public taskId: mesos.ITaskID;

                    /** Task agentId. */
                    public agentId?: (mesos.IAgentID|null);

                    /**
                     * Creates a new Task instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Task instance
                     */
                    public static create(properties?: mesos.scheduler.Call.Reconcile.ITask): mesos.scheduler.Call.Reconcile.Task;

                    /**
                     * Encodes the specified Task message. Does not implicitly {@link mesos.scheduler.Call.Reconcile.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: mesos.scheduler.Call.Reconcile.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Task message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Reconcile.Task.verify|verify} messages.
                     * @param message Task message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: mesos.scheduler.Call.Reconcile.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Task message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Reconcile.Task;

                    /**
                     * Decodes a Task message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Task
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Reconcile.Task;

                    /**
                     * Verifies a Task message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Task message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Task
                     */
                    public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Reconcile.Task;

                    /**
                     * Creates a plain object from a Task message. Also converts values to other types if specified.
                     * @param message Task
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: mesos.scheduler.Call.Reconcile.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Task to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Message. */
            interface IMessage {

                /** Message agentId */
                agentId: mesos.IAgentID;

                /** Message executorId */
                executorId: mesos.IExecutorID;

                /** Message data */
                data: Uint8Array;
            }

            /** Represents a Message. */
            class Message {

                /**
                 * Constructs a new Message.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IMessage);

                /** Message agentId. */
                public agentId: mesos.IAgentID;

                /** Message executorId. */
                public executorId: mesos.IExecutorID;

                /** Message data. */
                public data: Uint8Array;

                /**
                 * Creates a new Message instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Message instance
                 */
                public static create(properties?: mesos.scheduler.Call.IMessage): mesos.scheduler.Call.Message;

                /**
                 * Encodes the specified Message message. Does not implicitly {@link mesos.scheduler.Call.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Message message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Message message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Message;

                /**
                 * Decodes a Message message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Message;

                /**
                 * Verifies a Message message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Message message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Message
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Message;

                /**
                 * Creates a plain object from a Message message. Also converts values to other types if specified.
                 * @param message Message
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Message to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Request. */
            interface IRequest {

                /** Request requests */
                requests?: mesos.IRequest[];
            }

            /** Represents a Request. */
            class Request {

                /**
                 * Constructs a new Request.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.IRequest);

                /** Request requests. */
                public requests: mesos.IRequest[];

                /**
                 * Creates a new Request instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Request instance
                 */
                public static create(properties?: mesos.scheduler.Call.IRequest): mesos.scheduler.Call.Request;

                /**
                 * Encodes the specified Request message. Does not implicitly {@link mesos.scheduler.Call.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Request message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Request.verify|verify} messages.
                 * @param message Request message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Request message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Request;

                /**
                 * Decodes a Request message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Request
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Request;

                /**
                 * Verifies a Request message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Request message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Request
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Request;

                /**
                 * Creates a plain object from a Request message. Also converts values to other types if specified.
                 * @param message Request
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Request to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Suppress. */
            interface ISuppress {

                /** Suppress role */
                role?: string;
            }

            /** Represents a Suppress. */
            class Suppress {

                /**
                 * Constructs a new Suppress.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.scheduler.Call.ISuppress);

                /** Suppress role. */
                public role: string;

                /**
                 * Creates a new Suppress instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Suppress instance
                 */
                public static create(properties?: mesos.scheduler.Call.ISuppress): mesos.scheduler.Call.Suppress;

                /**
                 * Encodes the specified Suppress message. Does not implicitly {@link mesos.scheduler.Call.Suppress.verify|verify} messages.
                 * @param message Suppress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.scheduler.Call.ISuppress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Suppress message, length delimited. Does not implicitly {@link mesos.scheduler.Call.Suppress.verify|verify} messages.
                 * @param message Suppress message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.scheduler.Call.ISuppress, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Suppress message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Suppress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.scheduler.Call.Suppress;

                /**
                 * Decodes a Suppress message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Suppress
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.scheduler.Call.Suppress;

                /**
                 * Verifies a Suppress message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Suppress message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Suppress
                 */
                public static fromObject(object: { [k: string]: any }): mesos.scheduler.Call.Suppress;

                /**
                 * Creates a plain object from a Suppress message. Also converts values to other types if specified.
                 * @param message Suppress
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.scheduler.Call.Suppress, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Suppress to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace executor. */
    namespace executor {

        /** Properties of an Event. */
        interface IEvent {

            /** Event type */
            type?: mesos.executor.Event.Type;

            /** Event subscribed */
            subscribed?: mesos.executor.Event.ISubscribed;

            /** Event acknowledged */
            acknowledged?: mesos.executor.Event.IAcknowledged;

            /** Event launch */
            launch?: mesos.executor.Event.ILaunch;

            /** Event launchGroup */
            launchGroup?: mesos.executor.Event.ILaunchGroup;

            /** Event kill */
            kill?: mesos.executor.Event.IKill;

            /** Event message */
            message?: mesos.executor.Event.IMessage;

            /** Event error */
            error?: mesos.executor.Event.IError;
        }

        /**
         * Executor event API.
         *
         * An event is described using the standard protocol buffer "union"
         * trick, see https://developers.google.com/protocol-buffers/docs/techniques#union.
         */
        class Event {

            /**
             * Constructs a new Event.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.executor.IEvent);

            /** Event type. */
            public type: mesos.executor.Event.Type;

            /** Event subscribed. */
            public subscribed?: (mesos.executor.Event.ISubscribed|null);

            /** Event acknowledged. */
            public acknowledged?: (mesos.executor.Event.IAcknowledged|null);

            /** Event launch. */
            public launch?: (mesos.executor.Event.ILaunch|null);

            /** Event launchGroup. */
            public launchGroup?: (mesos.executor.Event.ILaunchGroup|null);

            /** Event kill. */
            public kill?: (mesos.executor.Event.IKill|null);

            /** Event message. */
            public message?: (mesos.executor.Event.IMessage|null);

            /** Event error. */
            public error?: (mesos.executor.Event.IError|null);

            /**
             * Creates a new Event instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Event instance
             */
            public static create(properties?: mesos.executor.IEvent): mesos.executor.Event;

            /**
             * Encodes the specified Event message. Does not implicitly {@link mesos.executor.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.executor.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link mesos.executor.Event.verify|verify} messages.
             * @param message Event message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.executor.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Event;

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Event;

            /**
             * Verifies an Event message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Event
             */
            public static fromObject(object: { [k: string]: any }): mesos.executor.Event;

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @param message Event
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.executor.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Event to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Event {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                SUBSCRIBED = 1,
                LAUNCH = 2,
                LAUNCH_GROUP = 8,
                KILL = 3,
                ACKNOWLEDGED = 4,
                MESSAGE = 5,
                ERROR = 6,
                SHUTDOWN = 7
            }

            /** Properties of a Subscribed. */
            interface ISubscribed {

                /** Subscribed executorInfo */
                executorInfo: mesos.IExecutorInfo;

                /** Subscribed frameworkInfo */
                frameworkInfo: mesos.IFrameworkInfo;

                /** Subscribed agentInfo */
                agentInfo: mesos.IAgentInfo;

                /** Subscribed containerId */
                containerId?: mesos.IContainerID;
            }

            /** Represents a Subscribed. */
            class Subscribed {

                /**
                 * Constructs a new Subscribed.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Event.ISubscribed);

                /** Subscribed executorInfo. */
                public executorInfo: mesos.IExecutorInfo;

                /** Subscribed frameworkInfo. */
                public frameworkInfo: mesos.IFrameworkInfo;

                /** Subscribed agentInfo. */
                public agentInfo: mesos.IAgentInfo;

                /** Subscribed containerId. */
                public containerId?: (mesos.IContainerID|null);

                /**
                 * Creates a new Subscribed instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Subscribed instance
                 */
                public static create(properties?: mesos.executor.Event.ISubscribed): mesos.executor.Event.Subscribed;

                /**
                 * Encodes the specified Subscribed message. Does not implicitly {@link mesos.executor.Event.Subscribed.verify|verify} messages.
                 * @param message Subscribed message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Event.ISubscribed, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Subscribed message, length delimited. Does not implicitly {@link mesos.executor.Event.Subscribed.verify|verify} messages.
                 * @param message Subscribed message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Event.ISubscribed, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Subscribed message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Subscribed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Event.Subscribed;

                /**
                 * Decodes a Subscribed message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Subscribed
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Event.Subscribed;

                /**
                 * Verifies a Subscribed message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Subscribed message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Subscribed
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Event.Subscribed;

                /**
                 * Creates a plain object from a Subscribed message. Also converts values to other types if specified.
                 * @param message Subscribed
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Event.Subscribed, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Subscribed to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Launch. */
            interface ILaunch {

                /** Launch task */
                task: mesos.ITaskInfo;
            }

            /** Represents a Launch. */
            class Launch {

                /**
                 * Constructs a new Launch.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Event.ILaunch);

                /** Launch task. */
                public task: mesos.ITaskInfo;

                /**
                 * Creates a new Launch instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Launch instance
                 */
                public static create(properties?: mesos.executor.Event.ILaunch): mesos.executor.Event.Launch;

                /**
                 * Encodes the specified Launch message. Does not implicitly {@link mesos.executor.Event.Launch.verify|verify} messages.
                 * @param message Launch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Event.ILaunch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Launch message, length delimited. Does not implicitly {@link mesos.executor.Event.Launch.verify|verify} messages.
                 * @param message Launch message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Event.ILaunch, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Launch message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Launch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Event.Launch;

                /**
                 * Decodes a Launch message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Launch
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Event.Launch;

                /**
                 * Verifies a Launch message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Launch message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Launch
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Event.Launch;

                /**
                 * Creates a plain object from a Launch message. Also converts values to other types if specified.
                 * @param message Launch
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Event.Launch, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Launch to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a LaunchGroup. */
            interface ILaunchGroup {

                /** LaunchGroup taskGroup */
                taskGroup: mesos.ITaskGroupInfo;
            }

            /** Represents a LaunchGroup. */
            class LaunchGroup {

                /**
                 * Constructs a new LaunchGroup.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Event.ILaunchGroup);

                /** LaunchGroup taskGroup. */
                public taskGroup: mesos.ITaskGroupInfo;

                /**
                 * Creates a new LaunchGroup instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LaunchGroup instance
                 */
                public static create(properties?: mesos.executor.Event.ILaunchGroup): mesos.executor.Event.LaunchGroup;

                /**
                 * Encodes the specified LaunchGroup message. Does not implicitly {@link mesos.executor.Event.LaunchGroup.verify|verify} messages.
                 * @param message LaunchGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Event.ILaunchGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LaunchGroup message, length delimited. Does not implicitly {@link mesos.executor.Event.LaunchGroup.verify|verify} messages.
                 * @param message LaunchGroup message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Event.ILaunchGroup, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LaunchGroup message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LaunchGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Event.LaunchGroup;

                /**
                 * Decodes a LaunchGroup message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LaunchGroup
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Event.LaunchGroup;

                /**
                 * Verifies a LaunchGroup message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LaunchGroup message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LaunchGroup
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Event.LaunchGroup;

                /**
                 * Creates a plain object from a LaunchGroup message. Also converts values to other types if specified.
                 * @param message LaunchGroup
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Event.LaunchGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LaunchGroup to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Kill. */
            interface IKill {

                /** Kill taskId */
                taskId: mesos.ITaskID;

                /** Kill killPolicy */
                killPolicy?: mesos.IKillPolicy;
            }

            /** Represents a Kill. */
            class Kill {

                /**
                 * Constructs a new Kill.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Event.IKill);

                /** Kill taskId. */
                public taskId: mesos.ITaskID;

                /** Kill killPolicy. */
                public killPolicy?: (mesos.IKillPolicy|null);

                /**
                 * Creates a new Kill instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Kill instance
                 */
                public static create(properties?: mesos.executor.Event.IKill): mesos.executor.Event.Kill;

                /**
                 * Encodes the specified Kill message. Does not implicitly {@link mesos.executor.Event.Kill.verify|verify} messages.
                 * @param message Kill message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Event.IKill, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Kill message, length delimited. Does not implicitly {@link mesos.executor.Event.Kill.verify|verify} messages.
                 * @param message Kill message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Event.IKill, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Kill message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Kill
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Event.Kill;

                /**
                 * Decodes a Kill message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Kill
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Event.Kill;

                /**
                 * Verifies a Kill message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Kill message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Kill
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Event.Kill;

                /**
                 * Creates a plain object from a Kill message. Also converts values to other types if specified.
                 * @param message Kill
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Event.Kill, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Kill to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Acknowledged. */
            interface IAcknowledged {

                /** Acknowledged taskId */
                taskId: mesos.ITaskID;

                /** Acknowledged uuid */
                uuid: Uint8Array;
            }

            /** Represents an Acknowledged. */
            class Acknowledged {

                /**
                 * Constructs a new Acknowledged.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Event.IAcknowledged);

                /** Acknowledged taskId. */
                public taskId: mesos.ITaskID;

                /** Acknowledged uuid. */
                public uuid: Uint8Array;

                /**
                 * Creates a new Acknowledged instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Acknowledged instance
                 */
                public static create(properties?: mesos.executor.Event.IAcknowledged): mesos.executor.Event.Acknowledged;

                /**
                 * Encodes the specified Acknowledged message. Does not implicitly {@link mesos.executor.Event.Acknowledged.verify|verify} messages.
                 * @param message Acknowledged message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Event.IAcknowledged, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Acknowledged message, length delimited. Does not implicitly {@link mesos.executor.Event.Acknowledged.verify|verify} messages.
                 * @param message Acknowledged message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Event.IAcknowledged, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Acknowledged message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Acknowledged
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Event.Acknowledged;

                /**
                 * Decodes an Acknowledged message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Acknowledged
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Event.Acknowledged;

                /**
                 * Verifies an Acknowledged message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Acknowledged message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Acknowledged
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Event.Acknowledged;

                /**
                 * Creates a plain object from an Acknowledged message. Also converts values to other types if specified.
                 * @param message Acknowledged
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Event.Acknowledged, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Acknowledged to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Message. */
            interface IMessage {

                /** Message data */
                data: Uint8Array;
            }

            /** Represents a Message. */
            class Message {

                /**
                 * Constructs a new Message.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Event.IMessage);

                /** Message data. */
                public data: Uint8Array;

                /**
                 * Creates a new Message instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Message instance
                 */
                public static create(properties?: mesos.executor.Event.IMessage): mesos.executor.Event.Message;

                /**
                 * Encodes the specified Message message. Does not implicitly {@link mesos.executor.Event.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Event.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Message message, length delimited. Does not implicitly {@link mesos.executor.Event.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Event.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Message message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Event.Message;

                /**
                 * Decodes a Message message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Event.Message;

                /**
                 * Verifies a Message message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Message message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Message
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Event.Message;

                /**
                 * Creates a plain object from a Message message. Also converts values to other types if specified.
                 * @param message Message
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Event.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Message to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Error. */
            interface IError {

                /** Error message */
                message: string;
            }

            /** Represents an Error. */
            class Error {

                /**
                 * Constructs a new Error.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Event.IError);

                /** Error message. */
                public message: string;

                /**
                 * Creates a new Error instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Error instance
                 */
                public static create(properties?: mesos.executor.Event.IError): mesos.executor.Event.Error;

                /**
                 * Encodes the specified Error message. Does not implicitly {@link mesos.executor.Event.Error.verify|verify} messages.
                 * @param message Error message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Event.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Error message, length delimited. Does not implicitly {@link mesos.executor.Event.Error.verify|verify} messages.
                 * @param message Error message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Event.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Error message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Event.Error;

                /**
                 * Decodes an Error message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Event.Error;

                /**
                 * Verifies an Error message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Error message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Error
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Event.Error;

                /**
                 * Creates a plain object from an Error message. Also converts values to other types if specified.
                 * @param message Error
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Event.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Error to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Call. */
        interface ICall {

            /** Call executorId */
            executorId: mesos.IExecutorID;

            /** Call frameworkId */
            frameworkId: mesos.IFrameworkID;

            /** Call type */
            type?: mesos.executor.Call.Type;

            /** Call subscribe */
            subscribe?: mesos.executor.Call.ISubscribe;

            /** Call update */
            update?: mesos.executor.Call.IUpdate;

            /** Call message */
            message?: mesos.executor.Call.IMessage;
        }

        /**
         * Executor call API.
         *
         * Like Event, a Call is described using the standard protocol buffer
         * "union" trick (see above).
         */
        class Call {

            /**
             * Constructs a new Call.
             * @param [properties] Properties to set
             */
            constructor(properties?: mesos.executor.ICall);

            /** Call executorId. */
            public executorId: mesos.IExecutorID;

            /** Call frameworkId. */
            public frameworkId: mesos.IFrameworkID;

            /** Call type. */
            public type: mesos.executor.Call.Type;

            /** Call subscribe. */
            public subscribe?: (mesos.executor.Call.ISubscribe|null);

            /** Call update. */
            public update?: (mesos.executor.Call.IUpdate|null);

            /** Call message. */
            public message?: (mesos.executor.Call.IMessage|null);

            /**
             * Creates a new Call instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Call instance
             */
            public static create(properties?: mesos.executor.ICall): mesos.executor.Call;

            /**
             * Encodes the specified Call message. Does not implicitly {@link mesos.executor.Call.verify|verify} messages.
             * @param message Call message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: mesos.executor.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Call message, length delimited. Does not implicitly {@link mesos.executor.Call.verify|verify} messages.
             * @param message Call message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: mesos.executor.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Call message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Call
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Call;

            /**
             * Decodes a Call message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Call
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Call;

            /**
             * Verifies a Call message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Call message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Call
             */
            public static fromObject(object: { [k: string]: any }): mesos.executor.Call;

            /**
             * Creates a plain object from a Call message. Also converts values to other types if specified.
             * @param message Call
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: mesos.executor.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Call to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Call {

            /** Type enum. */
            enum Type {
                UNKNOWN = 0,
                SUBSCRIBE = 1,
                UPDATE = 2,
                MESSAGE = 3
            }

            /** Properties of a Subscribe. */
            interface ISubscribe {

                /** Subscribe unacknowledgedTasks */
                unacknowledgedTasks?: mesos.ITaskInfo[];

                /** Subscribe unacknowledgedUpdates */
                unacknowledgedUpdates?: mesos.executor.Call.IUpdate[];
            }

            /** Represents a Subscribe. */
            class Subscribe {

                /**
                 * Constructs a new Subscribe.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Call.ISubscribe);

                /** Subscribe unacknowledgedTasks. */
                public unacknowledgedTasks: mesos.ITaskInfo[];

                /** Subscribe unacknowledgedUpdates. */
                public unacknowledgedUpdates: mesos.executor.Call.IUpdate[];

                /**
                 * Creates a new Subscribe instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Subscribe instance
                 */
                public static create(properties?: mesos.executor.Call.ISubscribe): mesos.executor.Call.Subscribe;

                /**
                 * Encodes the specified Subscribe message. Does not implicitly {@link mesos.executor.Call.Subscribe.verify|verify} messages.
                 * @param message Subscribe message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Call.ISubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Subscribe message, length delimited. Does not implicitly {@link mesos.executor.Call.Subscribe.verify|verify} messages.
                 * @param message Subscribe message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Call.ISubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Subscribe message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Subscribe
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Call.Subscribe;

                /**
                 * Decodes a Subscribe message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Subscribe
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Call.Subscribe;

                /**
                 * Verifies a Subscribe message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Subscribe message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Subscribe
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Call.Subscribe;

                /**
                 * Creates a plain object from a Subscribe message. Also converts values to other types if specified.
                 * @param message Subscribe
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Call.Subscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Subscribe to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an Update. */
            interface IUpdate {

                /** Update status */
                status: mesos.ITaskStatus;
            }

            /** Represents an Update. */
            class Update {

                /**
                 * Constructs a new Update.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Call.IUpdate);

                /** Update status. */
                public status: mesos.ITaskStatus;

                /**
                 * Creates a new Update instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Update instance
                 */
                public static create(properties?: mesos.executor.Call.IUpdate): mesos.executor.Call.Update;

                /**
                 * Encodes the specified Update message. Does not implicitly {@link mesos.executor.Call.Update.verify|verify} messages.
                 * @param message Update message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Call.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Update message, length delimited. Does not implicitly {@link mesos.executor.Call.Update.verify|verify} messages.
                 * @param message Update message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Call.IUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Update message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Update
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Call.Update;

                /**
                 * Decodes an Update message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Update
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Call.Update;

                /**
                 * Verifies an Update message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Update message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Update
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Call.Update;

                /**
                 * Creates a plain object from an Update message. Also converts values to other types if specified.
                 * @param message Update
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Call.Update, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Update to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Message. */
            interface IMessage {

                /** Message data */
                data: Uint8Array;
            }

            /** Represents a Message. */
            class Message {

                /**
                 * Constructs a new Message.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: mesos.executor.Call.IMessage);

                /** Message data. */
                public data: Uint8Array;

                /**
                 * Creates a new Message instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Message instance
                 */
                public static create(properties?: mesos.executor.Call.IMessage): mesos.executor.Call.Message;

                /**
                 * Encodes the specified Message message. Does not implicitly {@link mesos.executor.Call.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: mesos.executor.Call.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Message message, length delimited. Does not implicitly {@link mesos.executor.Call.Message.verify|verify} messages.
                 * @param message Message message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: mesos.executor.Call.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Message message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mesos.executor.Call.Message;

                /**
                 * Decodes a Message message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Message
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mesos.executor.Call.Message;

                /**
                 * Verifies a Message message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Message message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Message
                 */
                public static fromObject(object: { [k: string]: any }): mesos.executor.Call.Message;

                /**
                 * Creates a plain object from a Message message. Also converts values to other types if specified.
                 * @param message Message
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: mesos.executor.Call.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Message to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
